import React from "react"
import PropTypes from "prop-types"
import { Link, Redirect } from 'react-router-dom'
import { Button } from 'reactstrap'
import Book from '../../../assets/images/book.png'


const BorrowedShow = ({ book, parseDate, user, deleteRental, deleteCheck }) => (
    <div className="page" style={{ backgroundColor: "#E3F8F2" }}>
        <div className="imgCard" style={{ border: "3px solid #46C2A5" }}>
            {book.img_url === "" &&
                <img src={Book} />
            }
            {book.img_url.length > 0 &&
                <img src={book.img_url} />
            }
        </div>
        <div className="detailsCard" style={{ border: "3px solid #46C2A5" }}>
            <h3 className="heading">{book.title}</h3>
            <p><span className="boldText">Author: </span>{book.author}</p>
            <p><span className="boldText">Description: </span>{book.description}</p>
            <p><span className="boldText">Pages: </span>{book.pages}</p>
            {book.series &&
                <p><span className="boldText">Series: </span>{book.series}</p>
            }
            <p><span className="boldText">Pick Up Date: </span>{parseDate(book.rentals[0].pick_up_date)}</p>
            <p><span className="boldText">Due Date: </span>{parseDate(book.rentals[0].due_date)}</p>
            <br />
            <p><span className="boldText">Owner's Name: </span>{user.first_name} {user.last_name}</p>
            <p><span className="boldText">Owner's Email: </span>{user.email}</p>
            <Link to="/library" className="button">
                <Button className="editButton">Back to your Library</Button>
            </Link>

            <Button onClick={() => deleteRental(book.rentals[0].id)} id="deleteButton">
                Delete
            </Button>

            {deleteCheck && <Redirect to="/library" />}
        </div>
    </div >
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