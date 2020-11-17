import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'
import { Button, Table } from 'reactstrap'

const MyLibrary = ({ books, rentedBooks, nonRentedBooks, deleteBook, parseDate }) => (

    <div className="libraryPage" style={{ backgroundColor: "#E3F8F2" }}>
        <h2 className="headerText" style={{ color: "#46C2A5" }}>Books You Borrowed:</h2>
        <Table hover className="table">
            <thead className="mainRow">
                <tr>
                    <th>Book</th>
                    <th>Author</th>
                    <th>Pick Up Date</th>
                    <th>Due Date</th>
                </tr>
            </thead>
            <tbody className="bodyRow">
                {rentedBooks.map((book, index) => {
                    {
                        return book.rentals.map(rental => {

                            return (

                                <tr key={`book-${index}`}>
                                    <td>
                                        <Link className="libraryLink" to={`/borrowed/${book.id}`}>
                                            {book.title}
                                        </Link>
                                    </td>
                                    <td>{book.author}</td>
                                    <td>{parseDate(rental.pick_up_date)}</td>
                                    <td>{parseDate(rental.due_date)}</td>
                                </tr>

                            )
                        })
                    }
                })}
            </tbody>
        </Table>

        <h2 className="headerText" style={{ color: "#46C2A5" }}>Books You Lent:</h2>

        <Table hover className="table">
            <thead className="mainRow">
                <tr>
                    <th>Book</th>
                    <th>Author</th>
                    <th>Pick Up Date</th>
                    <th>Due Date</th>
                </tr>
            </thead>
            <tbody className="bodyRow">
                {books.map((book) => {
                    return book.rentals.map(rental => {
                        return (

                            <tr key={`book-${rental.id}`}>
                                <td>
                                    <Link className="libraryLink" to={`/lent/${book.id}`}>
                                        {book.title}
                                    </Link>
                                </td>
                                <td>{book.author}</td>

                                <td>{parseDate(rental.pick_up_date)}</td>
                                <td>{parseDate(rental.due_date)}</td>

                            </tr>
                        )
                    })
                })}
            </tbody>
        </Table>

        <h2 className="headerText" style={{ color: "#46C2A5" }}>Your Available Books:</h2>


        <Table hover className="table">
            <thead className="mainRow">
                <tr>
                    <th>Book</th>
                    <th>Author</th>
                    <th>Edit Book</th>
                    <th>Delete Book</th>
                </tr>
            </thead>
            <tbody className="bodyRow">
                {nonRentedBooks.map((book) => {
                    return (

                        <tr key={`book-${book.id}`}>
                            <td>
                                <Link className="libraryLink" to={`/lent/${book.id}`}>
                                    {book.title}
                                </Link>
                            </td>
                            <td>{book.author}</td>

                            <td>
                                <Button className="editButton">
                                    <Link to={`/lend/${book.id}`}>
                                        Edit
                                    </Link>
                                </Button>
                            </td>

                            <td>
                                <Button onClick={() => deleteBook(book.id)} id="deleteButton">
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    )
                })
                }
            </tbody>
        </Table>
    </div >
)

export default MyLibrary;

MyLibrary.propTypes = {
    books: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        author: PropTypes.string,
        description: PropTypes.string,
        pages: PropTypes.integer,
        series: PropTypes.string,
        pick_up_date: PropTypes.string,
        due_date: PropTypes.string
    }).isRequired)
}
