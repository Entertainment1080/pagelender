import React from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from './Pages/Home'
import Library from './Pages/Library'
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

export default class App extends React.Component {
  render () {
    return (
      <Router>
        
        <Header />

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/library" component={Library}/>
          <Route path="/borrow" component={Borrow}/>
          <Route path="/borrowshow" component={BorrowShow}/>
          <Route path="/borrowconfirmation" component={BorrowConfirmation}/>
          <Route path="/borrowedshow" component={BorrowedShow}/>
          <Route path="/lend" component={Lend}/>
          <Route path="/lendconfirmation" component={LendConfirmation}/>
          <Route path="/lendedshow" component={LendedShow}/>
          <Route component={NotFound}/>
        </Switch>

        <Footer />
        
      </Router>
    );
  }
}

