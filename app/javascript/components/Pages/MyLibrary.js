import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'
import { Button, Table } from 'reactstrap'

const MyLibrary = ({ books }) => (

    <>
        <h2>My Library</h2>

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
                {books.map((book, index) => {
                    return (

                        <tr key={`book-${index}`}>
                            <Link to={`/lended/${book.id}`}>
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
