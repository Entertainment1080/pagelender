import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Pages/Home'
import MyLibrary from './Pages/MyLibrary'
import Borrow from './Pages/Borrow'
import BorrowShow from './Pages/BorrowShow'
import BorrowConfirmation from './Pages/BorrowConfirmation'
import BorrowedShow from './Pages/BorrowedShow'
import Lend from './Pages/Lend'
import LendConfirmation from './Pages/LendConfirmation'
import LentShow from './Pages/LentShow'
import LendEdit from './Pages/LendEdit'
import Rental from './Pages/Rental'
import AboutUs from './Pages/AboutUs'
import NotFound from './Pages/NotFound'

import { Spinner } from 'reactstrap'
import Header from './Components/Header'
import Footer from './Components/Footer'

import { format, parseISO } from 'date-fns'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      rentals: [],
      users: [],
      headerColor: "#044f6d",
      newBook: null
    }
  }

  // Fetches all Books, Rentals, and Users and sets to state
  componentDidMount() {
    this.bookIndex()
    this.rentalIndex()
    this.userIndex()
  }

  //........................................... Fetch Requests

  // Fetch all Books
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

  // Fetch all Rentals
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

  // Fetch all Users
  userIndex = () => {
    fetch("/user")
      .then(response => {
        return response.json()
      })
      .then(userArr => {
        this.setState({
          users: userArr
        })
      })
      .catch(errors => {
        console.log("index errors: ", errors)
      })
  }

  // Create a Book
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
        this.setState({ newBook: payload })
        this.bookIndex()
      })
      .catch(errors => {
        console.log("Create errors: ", errors)
      })
  }

  // Create a Rental
  createNewRental = (newRental) => {
    return fetch("/rentals", {
      body: JSON.stringify(newRental),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(response => {
        if (response.status === 422) {
          alert("Invalid Submission")
        }
        return response
      })
      .then(payload => {
        this.bookIndex()
        this.rentalIndex()
      })
      .catch(errors => {
        console.log("Create errors: ", errors)
      })
  }

  // Update a Book
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

  // Delete a Book
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

  //........................................... Helper Methods

  // Returns an item with an id equal to the second arg
  findItem = (arr, id) => arr.find(item => item.id === Number(id))

  // Returns books rented by the user
  findRentedBooks = (arr, id) => arr.filter(book => book.rentals.length > 0 && book.rentals[0].user_id === id)

  // Returns owned books with no rentals
  findUsersNonRentedBooks = (arr) => arr.filter(book => book.rentals.length === 0)

  // Returns non-owned books with no rentals
  findNonRentedBooks = (arr, id) => arr.filter(book => book.rentals.length === 0 && book.user_id !== id)

  // Takes in ISO date and returns more legible date ex. 'Nov, 6th 2020 1:10 PM'
  parseDate = (isoString) => {
    let parsedIso = parseISO(isoString)
    return format(parsedIso, "MMM, do y h:m a")
  }

  // Changes the Header Component's background-color
  changeColor = (color) => this.setState({ headerColor: color })

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

        {/* Header Component - Renders on every page. Includes title that links to the home root and navbar */}
        <Header
          logged_in={logged_in}
          sign_in_route={sign_in_route}
          sign_up_route={sign_up_route}
          sign_out_route={sign_out_route}
          changeColor={this.changeColor}
          headerColor={this.state.headerColor}
        />

        <Switch>

          {/* Home Page */}
          <Route exact path="/" render={(props) => {
            return (
              <Home
                changeColor={this.changeColor}
              />
            )
          }} />

          {/* My Library Page - Lists all of the user's  borrowed books, lent books, and books lent but availible */}
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

          {/* Borrow Index Page - Shows all books (except user's books) currently availible to borrow */}
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

          {/* Borrow Show Page - Lists info for a specific book availible to borrow */}
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

          {/* Borrow Confirmation Page - Gives the user confirmation that they have borrowed a book */}
          <Route path="/borrowconfirmation" render={(props) => {
            return (
              <BorrowConfirmation
                changeColor={this.changeColor}
              />
            )
          }} />

          {/* Borrowed Show Page - Lists info for a specific book that is borrowed */}
          <Route path="/borrowed/:id"
            render={(props) => {
              let book = this.findItem(this.state.books, props.match.params.id)
              let user = this.findItem(this.state.users, book.user_id)
              if (book && user) {
                return (
                  <BorrowedShow
                    book={book}
                    user={user}
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

          {/* Lend Form Page - Shows the user a form to submit a new book to be borrowed */}
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

          {/* Lend Confirmation Page - Gives the user confirmation that they have submitted a book to be borrowed */}
          <Route path="/lendconfirmation" render={(props) => {
            return (
              <LendConfirmation
                changeColor={this.changeColor}
              />
            )
          }} />

          {/* Rental Form Page - Shows the user a form to enter a pick up and due date for a book they want to borrow */}
          <Route exact path="/rental"
            render={(props) => {
              return (
                <Rental
                  book={this.state.newBook}
                  createNewRental={this.createNewRental}
                  current_user={current_user}
                />
              )
            }}
          />

          {/* Lent Show Page - Lists info for a specific book that has been lent */}
          <Route path="/lent/:id"
            render={(props) => {
              let id = props.match.params.id
              let book = this.findItem(this.state.books, parseInt(id))
              if (book) {
                return (
                  <LentShow
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

          {/* Lend Edit Page - Shows a form to edit a book lent but availible */}
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

          {/* About Us Page - Shows Mission Statement and Bios for creators */}
          <Route path="/aboutus" component={AboutUs} />

          {/* Not Found Page */}
          <Route component={NotFound} />

        </Switch>

        {/* Footer Component - Renders on every page. Includes copyright and scrollTop function  */}
        <Footer
          headerColor={this.state.headerColor}
        />

      </Router >
    );
  }
}
