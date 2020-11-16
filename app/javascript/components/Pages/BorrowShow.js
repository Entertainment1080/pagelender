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
            <p><span class="boldText">Author: </span>{book.author}</p>
            <p><span class="boldText">Description: </span>{book.description}</p>
            <p><span class="boldText">Pages: </span>{book.pages}</p>
            {book.series &&
                <p><span class="boldText">Series: </span>{book.series}</p>
            }
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