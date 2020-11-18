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
        <div className="page" style={{ backgroundColor: "#ECFDFF" }}>
            <div className="imgCard" style={{ border: "3px solid #044F6D" }}>
                {book.img_url === "" &&
                    <img src={Book} />
                }
                {book.img_url.length > 0 &&
                    <img src={book.img_url} />
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
            <div id="review">

                {review &&
                    <div id="goodReadsBox" dangerouslySetInnerHTML={{ __html: review.reviews_widget }} />
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