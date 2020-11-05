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
import NotFound from './Pages/NotFound'

import Header from './Components/Header'
import Footer from './Components/Footer'

import MockBooks from './mockBooks.js'

export default class App extends React.Component{ 
  constructor(props) {
    super(props)
    this.state = {
      books: MockBooks
    }
  }

  createNewBook = (form) => {
    console.log(form);
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
              return (
                <Borrow
                  books={this.state.books}
                />
              )
            }}
          />

          <Route
            path="/borrow/:id"
            render={(props) => {
              let id = props.match.params.id
              let book = this.state.books.find(book => book.id === parseInt(id)) 
              return (
                <BorrowShow book={book} />
              )
            }}
          />

          <Route path="/borrowconfirmation" component={BorrowConfirmation} />

          <Route
            path="/borrowed/:id"
            render={(props) => {
              let id = props.match.params.id
              let book = this.state.books.find(book => book.id === parseInt(id))
              return (
                <BorrowedShow
                  book={book}
                />
              )
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

          <Route component={NotFound} />

        </Switch>

        <Footer />

      </Router>
    );
  }
}

