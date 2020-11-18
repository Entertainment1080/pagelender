import React, { Component } from "react"
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

export default class LendConfirmation extends Component {
    render() {
        return (
            <div className="rental-page" style={{ backgroundColor: '#faf2d6' }}>
                <div className="confirmation-card">
                <h4 className="headerText" style={{ color: "#f8c922" }}>Your book is on the market! We'll notify you if someone wants to borrow it.</h4>

                <Link to="/library">
                    <Button className="form-submit-btn">Go to Your Library</Button>
                </Link>
            </div>
            </div>
        )
    }
}