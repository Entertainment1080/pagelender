import React from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { Spinner } from 'reactstrap'
import Home from './Pages/Home'
import MyLibrary from './Pages/MyLibrary'
import Borrow from './Pages/Borrow'
import BorrowShow from './Pages/BorrowShow'
import BorrowConfirmation from './Pages/BorrowConfirmation'
import BorrowedShow from './Pages/BorrowedShow'
import Lend from './Pages/Lend'
import LendConfirmation from './Pages/LendConfirmation'
import LendedShow from './Pages/LendedShow'
import LendEdit from './Pages/LendEdit'
import Rental from './Pages/Rental'
import NotFound from './Pages/NotFound'

import Header from './Components/Header'
import Footer from './Components/Footer'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      rentals: []
    }
  }

  componentDidMount() {
    this.bookIndex()
    this.rentalIndex()
  }

  bookIndex = () => {
    fetch("/books")
      .then(response => {
        return response.json()
      })
      .then(bookArr => {
        this.setState({
          books: bookArr
        })
      })
      .catch(errors => {
        console.log("index errors: ", errors)
      })
  }

  rentalIndex = () => {
    fetch("/rentals")
      .then(response => {
        return response.json()
      })
      .then(rentalArr => {
        this.setState({
          rentals: rentalArr
        })
      })
      .catch(errors => {
        console.log("index errors: ", errors)
      })
  }

  createNewBook = (newBook) => {
    return fetch("/books", {
      body: JSON.stringify(newBook),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(response => {
        if (response.status === 422) {
          alert("Invalid Submission")
        }
        return response.json()
      })
      .then(payload => {
        this.bookIndex()
      })
      .catch(errors => {
        console.log("Create errors: ", errors)
      })
  }

  createNewRental = (newRental) => {
    console.log(newRental);
    // return fetch("/rentals", {
    //   body: JSON.stringify(newRental),
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   method: "POST"
    // })
    //   .then(response => {
    //     if (response.status === 422) {
    //       alert("Invalid Submission")
    //     }
    //     return response.json()
    //   })
    //   .then(payload => {
    //     this.bookIndex()
    //   })
    //   .catch(errors => {
    //     console.log("Create errors: ", errors)
    //   })
  }


  updateBook = (book, id) => {
    return fetch(`/books/${id}`, {
      body: JSON.stringify(book),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
      .then(response => {
        if (response.status === 200) {
          this.bookIndex()
        }
        return response
      })
      .catch(errors => {
        console.log("edit errors:", errors)
      })
  }

  deleteBook = (id) => {
    return fetch(`/books/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then(response => {
        if (response.status === 200) {
          this.bookIndex()
        }
        return response.json()
      })
      .catch(errors => {
        console.log("delete errors:", errors)
      })
  }

  findItem = (arr, id) => arr.find(item => item.id === Number(id))

  findRentedBooks = (arr, id) => arr.filter(book => book.rentals.length > 0 && book.rentals[0].user_id === id)

  findUsersNonRentedBooks = (arr, id) => arr.filter(book => book.rentals.length === 0)

  findNonRentedBooks = (arr, id) => arr.filter(book => book.rentals.length === 0 && book.user_id !== id)

  parseDate = (isoString) => {
    const d = isoString.split(/\D+/);
    const offsetMult = isoString.indexOf('+') !== -1 ? -1 : 1;
    const hrOffset = offsetMult * (+d[7] || 0);
    const minOffset = offsetMult * (+d[8] || 0);
    return new Date(Date.UTC(+d[0], +d[1] - 1, +d[2], +d[3] + hrOffset, +d[4] + minOffset, +d[5], +d[6] || 0)).toString();
  };

  render() {
    const {
      logged_in,
      sign_in_route,
      sign_up_route,
      sign_out_route,
      current_user
    } = this.props
    return (
      <Router>

        <Header
          logged_in={logged_in}
          sign_in_route={sign_in_route}
          sign_up_route={sign_up_route}
          sign_out_route={sign_out_route}
          current_user={current_user}
        />

        <Switch>

          <Route exact path="/" component={Home} />

          <Route path="/library"
            render={(props) => {
              let user = current_user.id
              let books = this.state.books.filter(book => book.user_id === user)
              let rentedBooks = this.findRentedBooks(this.state.books, user)
              let nonRentedBooks = this.findUsersNonRentedBooks(books, user)
              return (
                <MyLibrary
                  {...props}
                  books={books}
                  rentedBooks={rentedBooks}
                  nonRentedBooks={nonRentedBooks}
                  deleteBook={this.deleteBook}
                  parseDate={this.parseDate}
                />
              )
            }}
          />

          <Route exact path="/borrow"
            render={(props) => {
              let user = current_user.id
              let books = this.findNonRentedBooks(this.state.books, user)
              if (books) {
                return (
                  <Borrow
                    {...props}
                    books={books}
                  />
                )
              }
              else {
                return (
                  <div>
                    Loading Borrowable Books...
                    <br /><Spinner style={{ width: '3rem', height: '3rem' }} color="dark" />
                  </div>
                )
              }
            }}
          />

          <Route
            path="/borrow/:id"
            render={(props) => {
              let book = this.findItem(this.state.books, props.match.params.id)
              if (book) {
                return (
                  <BorrowShow
                    book={book}
                    parseDate={this.parseDate}
                  />
                )
              } else {
                return (
                  <div>
                    Loading the Book...
                    <br /><Spinner style={{ width: '3rem', height: '3rem' }} color="dark" />
                  </div>
                )
              }
            }}
          />

          <Route path="/borrowconfirmation" component={BorrowConfirmation} />

          <Route
            path="/borrowed/:id"
            render={(props) => {
              let book = this.findItem(this.state.books, props.match.params.id)
              if (book) {
                return (
                  <BorrowedShow
                    book={book}
                    parseDate={this.parseDate}
                  />
                )
              } else {
                return (
                  <div>
                    Loading Book You Borrowed...
                    <br /><Spinner style={{ width: '3rem', height: '3rem' }} color="dark" />
                  </div>
                )
              }
            }}
          />

          <Route exact path="/lend"
            render={(props) => {
              return (
                <Lend
                  createNewBook={this.createNewBook}
                  current_user={current_user}
                />
              )
            }}
          />

          <Route path="/lendconfirmation" component={LendConfirmation} />

          <Route exact path="/rental"
            render={(props) => {
              return (
                <Rental
                  createNewRental={this.createNewRental}
                  current_user={current_user}
                />
              )
            }}
          />

          <Route
            path="/lended/:id"
            render={(props) => {
              let id = props.match.params.id
              let book = this.findItem(this.state.books, parseInt(id))
              if (book) {
                return (
                  <LendedShow
                    book={book}
                    parseDate={this.parseDate}
                  />
                )
              } else {
                return (
                  <div>
                    Loading Book You Lended...
                    <br /><Spinner style={{ width: '3rem', height: '3rem' }} color="dark" />
                  </div>
                )
              }
            }}
          />

          <Route path="/lend/:id"
            render={(props) => {
              let id = props.match.params.id
              let book = this.state.books.find(book => book.id === parseInt(id))
              if (book) {
                return (
                  <LendEdit
                    updateBook={this.updateBook}
                    current_user={current_user}
                    book={book}
                  />
                )
              } else {
                return (
                  <div>
                    Loading Your Book...
                    <br /><Spinner style={{ width: '3rem', height: '3rem' }} color="dark" />
                  </div>
                )
              }
            }}
          />

          <Route component={NotFound} />

        </Switch>

        <Footer />

      </Router>
    );
  }
}
