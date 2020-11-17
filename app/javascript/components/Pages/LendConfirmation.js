import React, { Component } from "react"
import { Button } from 'reactstrap'
import { Link, useLocation } from 'react-router-dom'

export default class LendConfirmation extends Component {
    render() {
        const currentPage = useLocation()
        const headerClass = currentPage.pathname.replace("/", "")
        return (
            <div className="page" className={headerClass}>
                <h5>Your book is on the market! We'll notify you if someone wants to borrow it.</h5>

                <Link to="/library">
                    <Button>Go to Your Library</Button>
                </Link>
            </div>
        )
    }
}