import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap'
import Book from '../../../assets/images/book.png'

const Borrow = ({ books }) => (
    <>
        <div id="borrowPage" style={{ backgroundColor: "#ECFDFF" }}>
            <h2 className="headerText" style={{ color: "#044F6D" }}>Available Books:</h2>
            <div id="borrow-body" >
                {books.map((book, index) => {
                    return (
                        <div key={`book-${index}`} className="borrowCard">
                            {book.img_url === "" &&
                                <img src={Book} />
                            }
                            {book.img_url.length > 0 &&
                                <img src={book.img_url} />
                            }
                            <h4>{book.title}</h4>
                            <div className="info">
                                <p>Author: {book.author}</p>
                                <p>Series: {book.series}</p>
                                <p>Pages: {book.pages}</p>
                            </div>
                            <Link to={`/borrow/${book.id}`}>
                                <Button className="borrowInfoButton">More Info</Button>
                            </Link>
                        </div>
                    )
                })
                }
            </div>
        </div>
    </>
)

export default Borrow;

Borrow.propTypes = {
    books: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        author: PropTypes.string,
        description: PropTypes.string,
        pages: PropTypes.integer,
        series: PropTypes.string
    })).isRequired
}