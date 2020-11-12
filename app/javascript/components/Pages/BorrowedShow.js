import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

const BorrowedShow = ({ book }) => (
    <>
        < div className="show" >
            <div className="bookCard">
                <h3 className="heading">{book.title}</h3>
                <p className="apt-info">Author: {book.author}</p>
                <p className="apt-info">Description: {book.description}</p>
                <p className="apt-info">Pages: {book.pages}</p>
                <p className="apt-info">Series: {book.series}</p>
                <p className="apt-info">Pick Up Date: {book.rentals[0].pick_up_date}</p>
                <p className="apt-info">Due Date: {book.rentals[0].due_date}</p>
                <br />
                <Link to="/library" className="button">
                    <Button className="info">Back to your Library</Button>
                </Link>
            </div>
        </div>
    </>

)

export default BorrowedShow;

BorrowedShow.propTypes = {
    book: PropTypes.shape({
        title: PropTypes.string,
        author: PropTypes.string,
        description: PropTypes.string,
        pages: PropTypes.integer,
        series: PropTypes.string,
    }).isRequired
}