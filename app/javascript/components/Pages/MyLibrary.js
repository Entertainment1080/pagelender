import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'
import { Button, Table } from 'reactstrap'

const MyLibrary = ({ books, rentedBooks, nonRentedBooks, deleteBook }) => (

    <>
        <h2>Books You Borrowed:</h2>

        <Table striped>
            <thead>
                <tr>
                    <th>Book</th>
                    <th>Author</th>
                    <th>Pick Up Date</th>
                    <th>Due Date</th>
                </tr>
            </thead>
            <tbody>
                {rentedBooks.map((book, index) => {
                    return (

                        <tr key={`book-${index}`}>
                            <Link to={`/borrowed/${book.id}`}>
                                <td>{book.title}</td>
                            </Link>
                            <td>{book.author}</td>
                            <td>{book.pick_up_date}</td>
                            <td>{book.due_date}</td>
                        </tr>

                    )
                })}
            </tbody>
        </Table>

        <h2>Books You Lent:</h2>

        <Table striped>
            <thead>
                <tr>
                    <th>Book</th>
                    <th>Author</th>
                    <th>Pick Up Date</th>
                    <th>Due Date</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book) => {
                    return book.rentals.map(rental => {
                        return (

                            <tr key={`book-${rental.id}`}>
                                <Link to={`/lended/${book.id}`}>
                                    <td>{book.title}</td>
                                </Link>
                                <td>{book.author}</td>

                                <td>{rental.pick_up_date}</td>
                                <td>{rental.due_date}</td>

                            </tr>
                        )
                    })
                })}
            </tbody>
        </Table>

        <h2>Your Available Books:</h2>

        <Table striped>
            <thead>
                <tr>
                    <th>Book</th>
                    <th>Author</th>
                    <th>Edit</th>
                    <th>Delete Book</th>
                </tr>
            </thead>
            <tbody>
                {nonRentedBooks.map((book) => {
                    return (

                        <tr key={`book-${book.id}`}>
                            <Link to={`/lended/${book.id}`}>
                                <td>{book.title}</td>
                            </Link>
                            <td>{book.author}</td>

                            <Link to={`/lend/${book.id}`}>
                                <td>Edit Book</td>
                            </Link>
                            <td><Button onClick={() => deleteBook(book.id)}>
                                Delete Book
                            </Button></td>

                        </tr>
                    )
                })
                }
            </tbody>
        </Table>


    </>
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
