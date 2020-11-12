import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import Book from '../../../assets/images/book.png'

const LendedShow = ({ book, parseDate }) => (


    <div className="show">
        {book.rentals.length > 0 &&
            <div className="bookCard">
                {book.img_url === "" &&
                    <img className="bookImg" src={Book} />
                }
                {book.img_url.length > 0 &&
                    <img className="bookImg" src={book.img_url} />
                }
                <h3 className="heading">{book.title}</h3>
                <p className="apt-info">Author: {book.author}</p>
                <p className="apt-info">Description: {book.description}</p>
                <p className="apt-info">Pages: {book.pages}</p>
                <p className="apt-info">Series: {book.series}</p>
                <p className="apt-info">Pick Up Date: {parseDate(book.rentals[0].pick_up_date)}</p>
                <p className="apt-info">Due Date: {parseDate(book.rentals[0].due_date)}</p>
                <Link to="/library" className="button">
                    <Button className="info">Back to Library</Button>
                </Link>
            </div>
        }
        {book.rentals.length === 0 &&
            <div className="bookCard">
                {book.img_url === "" &&
                    <img className="bookImg" src={Book} />
                }
                {book.img_url.length > 0 &&
                    <img className="bookImg" src={book.img_url} />
                }
                <h3 className="heading">{book.title}</h3>
                <p className="apt-info">Author: {book.author}</p>
                <p className="apt-info">Description: {book.description}</p>
                <p className="apt-info">Pages: {book.pages}</p>
                <p className="apt-info">Series: {book.series}</p>
                <Link to="/library" className="button">
                    <Button className="info">Back to Library</Button>
                </Link>
            </div>
        }
    </div>

)

export default LendedShow;

LendedShow.propTypes = {
    book: PropTypes.shape({
        title: PropTypes.string,
        author: PropTypes.string,
        description: PropTypes.string,
        pages: PropTypes.integer,
        series: PropTypes.string,
    }).isRequired
}