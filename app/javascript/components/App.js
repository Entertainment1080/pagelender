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

import MockBooks from './mockBooks.js'

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
    fetch("http://localhost:3000/books")
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
    fetch("http://localhost:3000/rentals")
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

  createNewBook = (form) => {
    console.log(form);
  }

  updateBook = (form, id) => {
    console.log(form)
    console.log(id)
  }

  findItem = (arr, id) => {
    return arr.find(item => item.id === Number(id))
  }



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
              return (
                <MyLibrary
                  {...props}
                  books={books}
                />
              )
            }}
          />

          <Route exact path="/borrow"
            render={(props) => {
              let user = current_user.id
              let books = this.state.books.filter(book => book.user_id !== user)
              let rentals = this.state.rentals.filter(rental => rental.user_id !== user)
              return (
                <Borrow
                  {...props}
                  books={books}
                  rentals={rentals}
                />
              )
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
                    loading borrowed books
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
                    loading borrowed books
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
              return (
                <LendedShow book={book} />
              )
            }}
          />

          <Route path="/lend/:id"
            render={(props) => {
              let id = props.match.params.id
              let book = this.state.books.find(book => book.id === parseInt(id))
              return (
                <LendEdit
                  updateBook={this.updateBook}
                  current_user={current_user}
                  book={book}
                />
              )
            }}
          />

          <Route component={NotFound} />

        </Switch>

        <Footer />

      </Router>
    );
  }
}

