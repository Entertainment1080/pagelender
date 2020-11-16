import React, { Component } from "react"
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

export default class LendConfirmation extends Component {
    render() {
        const { changeColor } = this.props
        return (
            <>
                <h5>Your book is on the market! We'll notify you if someone wants to borrow it.</h5>

                <Link to="/library" onClick={() => changeColor("#46C2A5")}>
                    <Button>Go to Your Library</Button>
                </Link>
            </>
        )
    }
}