import React, { Component } from "react"
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

export default class BorrowConfirmation extends Component {
    render() {
        return (
            <div className="rental-page" style={{ backgroundColor: "#ECFDFF" }}>
                <div className="confirmation-card">
                <h4 className="headerText" style={{ color: "#044F6D" }}>Thank you for borrowing a book. We'll notify the owner right away!</h4>

                <Link to="/library" >
                    <Button className="borrowInfoButton">Go to Your Library</Button>
                </Link>
                </div>
            </div>
        )
    }
}