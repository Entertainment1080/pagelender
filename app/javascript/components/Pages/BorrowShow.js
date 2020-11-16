import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import Book from '../../../assets/images/book.png'


const BorrowShow = ({ book }) => (

    <div className="page" style={{ backgroundColor: "#ECFDFF" }}>
        <div className="imgCard" style={{ border: "3px solid #044F6D" }}>
            {book.img_url === "" &&
                <img className="bookImg" src={Book} />
            }
            {book.img_url.length > 0 &&
                <img className="bookImg" src={book.img_url} />
            }
        </div>
        <div className="detailsCard" style={{ border: "3px solid #044F6D" }}>
            <h3 className="heading">{book.title}</h3>
            <p className="apt-info">Author: {book.author}</p>
            <p className="apt-info">Description: {book.description}</p>
            <p className="apt-info">Pages: {book.pages}</p>
            <p className="apt-info">Series: {book.series}</p>
            {/* Will impliment once I get create for rentals working */}
            {/* <p className="apt-info">Pick Up Date: {parseDate(book.rentals[0].pick_up_date)}</p>
            <p className="apt-info">Due Date: {parseDate(book.rentals[0].due_date)}</p> */}
            <Link to={`/rental?book_id=${book.id}`} className="button">
                <Button className="borrowInfoButton">Rent Book</Button>
            </Link>
            <Link to="/borrow" className="button">
                <Button className="borrowInfoButton">Back to All Books</Button>
            </Link>
        </div>
    </div >
)

export default BorrowShow;

BorrowShow.propTypes = {
    book: PropTypes.shape({
        title: PropTypes.string,
        author: PropTypes.string,
        description: PropTypes.string,
        pages: PropTypes.integer,
        series: PropTypes.string,
    }).isRequired
}