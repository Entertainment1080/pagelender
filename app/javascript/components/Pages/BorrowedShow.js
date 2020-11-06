import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

const BorrowedShow = ({ book }) => (

    <div className="show">
        <div className="bookCard">
            <h3 className="heading">{book.title}</h3>
            <p className="apt-info">Author: {book.author}</p>
            <p className="apt-info">Description: {book.description}</p>
            <p className="apt-info">Pages: {book.pages}</p>
            <p className="apt-info">Series: {book.series}</p>
            <p className="apt-info">Pick Up Date: {book.pick_up_date}</p>
            <p className="apt-info">Due Date: {book.due_date}</p>
            <br />
            <Link to="/borrow" className="button">
                <Button className="info">Back to All Books</Button>
            </Link>
        </div>
    </div>

)

export default BorrowedShow;

BorrowedShow.propTypes = {
    book: PropTypes.shape({
        title: PropTypes.string,
        author: PropTypes.string,
        description: PropTypes.string,
        pages: PropTypes.integer,
        series: PropTypes.string,
        pick_up_date: PropTypes.string,
        due_date: PropTypes.string
    }).isRequired
}