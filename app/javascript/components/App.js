import React from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

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
    console.log(newBook)
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


  updateBook = (book, id) => {
    return fetch(`/books/${id}`, {
      body: JSON.stringify(book),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then (response => {
      if (response.status === 200) {
        this.bookIndex()
      }
      return response
    })
    .catch (errors => {
      console.log("edit errors:", error)
    })
  }

  findItem = (arr, id) => {
    return arr.find(item => item.id === Number(id))
  }

  findRentedBooks = (arr, id) => {
    let rentedBooks = arr.filter(book => book.rentals.length > 0)
    return rentedBooks.filter(book => book.rentals[0].user_id === id)
  }

  findUsersNonRentedBooks = (arr, id) => {
    return arr.filter(book => book.rentals.length === 0)
  }

  findNonRentedBooks = (arr, id) => {
    let nonRented = arr.filter(book => book.rentals.length === 0)
    return nonRented.filter(book => book.user_id !== id)
  }


  render() {
    const {
      logged_in,
      sign_in_route,
      sign_up_route,
      sign_out_route,
      current_user
    } = this.props

    console.log(current_user);

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
              console.log(nonRentedBooks);
              return (
                <MyLibrary
                  {...props}
                  books={books}
                  rentedBooks={rentedBooks}
                  nonRentedBooks={nonRentedBooks}
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
                    Loading Borroweable Books...
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
                  />
                )
              } else {
                return (
                  <div>
                    Loading Book Your About To Borrow...
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
              let rental = this.findItem(this.state.rentals, props.match.params.id)
              if (book && rental) {
                return (
                  <BorrowedShow
                    book={book}
                    rental={rental}
                  />
                )
              } else {
                return (
                  <div>
                    Loading Book You Borrowed...
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

          <Route
            path="/lended/:id"
            render={(props) => {
              let id = props.match.params.id
              let book = this.state.books.find(book => book.id === parseInt(id))
              let rental = this.state.rentals.find(rental => rental.book_id === parseInt(id))
              if (book) {
                return (
                  <LendedShow
                    book={book}
                    rental={rental}
                  />
                )
              } else {
                return (
                  <div>
                    Loading Book You Lended...
                  </div>
                )
              }
            }}
          />

          <Route path="/lend/:id"
            render={(props) => {
              let id = props.match.params.id
              let book = this.state.books.find(book => book.id === parseInt(id))
              console.log(book)
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
