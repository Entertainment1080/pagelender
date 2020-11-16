import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import Book from '../../../assets/images/book.png'

const fetchReview = (title, author) => {
    return fetch(`/reviews?title=${title}&author=${author}`)
        .then(response => {
            return response.json()
        })
        .then(payload => {
            console.log(payload);
            return payload
        })
        .catch(errors => {
            console.log("review errors: ", errors)
        })
}

const BorrowShow = ({ book }) => {
    const [review, setReview] = useState(null)

    useEffect(() => {
        const init = async () => {
            let review = await fetchReview(book.title, book.author)
            setReview(review)
        }
        init()
    }, [])

    return (
        <div className="show">
            <div className="bookCard">
                {book.img_url === "" &&
                    <img className="bookImg" src={Book} />
                }
                {book.img_url.length > 0 &&
                    <img className="bookImg" src={book.img_url} />
                }
                <h3 className="heading">{book.title}</h3>
                <p>Author: {book.author}</p>
                <p>Description: {book.description}</p>
                <p>Pages: {book.pages}</p>
                <p>Series: {book.series}</p>

                <Link to={`/rental?book_id=${book.id}`} className="button">
                    <Button className="info">Rent Book</Button>
                </Link>

                <Link to="/borrow" className="button">
                    <Button className="info">Back to All Books</Button>
                </Link>

                {review &&
                    <div dangerouslySetInnerHTML={{ __html: review.reviews_widget }} />
                }

            </div>
        </div>
    )

}

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