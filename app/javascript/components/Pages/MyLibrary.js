import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'
import { Button, Table } from 'reactstrap'

const MyLibrary = ({ books, rentedBooks, nonRentedBooks, deleteBook, parseDate }) => (

    <div class="page" style={{ backgroundColor: "#E3F8F2" }}>
        <h2 class="libraryHeaderText" style={{ paddingTop: "0vw" }}>Books You Borrowed:</h2>
        <Table hover class="table">
            <thead class="mainRow">
                <tr>
                    <th>Book</th>
                    <th>Author</th>
                    <th>Pick Up Date</th>
                    <th>Due Date</th>
                </tr>
            </thead>
            <tbody class="bodyRow">
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

        <h2 class="libraryHeaderText">Books You Lent:</h2>

        <Table hover class="table">
            <thead class="mainRow">
                <tr>
                    <th>Book</th>
                    <th>Author</th>
                    <th>Pick Up Date</th>
                    <th>Due Date</th>
                </tr>
            </thead>
            <tbody class="bodyRow">
                {books.map((book) => {
                    return book.rentals.map(rental => {
                        return (

                            <tr key={`book-${rental.id}`}>
                                <td>
                                    <Link className="libraryLink" to={`/lended/${book.id}`}>
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

        <h2 class="libraryHeaderText">Your Available Books:</h2>


        <Table hover class="table">
            <thead class="mainRow">
                <tr>
                    <th>Book</th>
                    <th>Author</th>
                    <th>Edit Book</th>
                    <th>Delete Book</th>
                </tr>
            </thead>
            <tbody class="bodyRow">
                {nonRentedBooks.map((book) => {
                    return (

                        <tr key={`book-${book.id}`}>
                            <td>
                                <Link className="libraryLink" to={`/lended/${book.id}`}>
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
