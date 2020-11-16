import React, { Component } from "react"
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

export default class BorrowConfirmation extends Component {
    render() {
        const { changeColor } = this.props
        return (
            <>
                <h5>Thank you for borrowing a book. We'll notify the owner right away!</h5>

                <Link to="/library" onClick={() => changeColor("#46C2A5")}>
                    <Button>Go to Your Library</Button>
                </Link>
            </>
        )
    }
}