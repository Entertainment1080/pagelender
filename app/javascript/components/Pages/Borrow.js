import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap'

const Borrow = ({ books }) => (
    <>
        <h3 className="heading">All Books</h3>
        {
            books.map((book, index) => {
                return (
                    <div key={`book-${index}`} className="bookCard">
                        <p>{book.title}</p>
                        <div className="info">
                            <h4>Author: {book.author}</h4>
                            <p>Description: {book.description}</p>
                            <p>Series: {book.series}</p>
                            <p>Pages: {book.pages}</p>
                        </div>
                        <br />
                        <Link to={`/borrow/${book.id}`} className="button">
                            <Button className="info">More Info</Button>
                        </Link>
                    </div>
                )
            })
        }
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