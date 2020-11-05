import React, { Component } from "react"
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap'

const Borrow = ({ books }) => (

    <>
        <h3 className="heading">All Books</h3>
        { books.map((book, index) => {
            return (
                <div key={`book-${index}`} className="bookCard">
                    <p>{book.title}</p>
                    <div className="info">
                        <h4>Author: {book.author}</h4>
                        <p>Description: {book.description}</p>
                        <p>Pages: {book.pages}</p>
                        <p>Series: {book.series}</p>
                        <p>Pick Up Date: {book.pick_up_date}</p>
                        <p>Due Date: {book.due_date}</p>
                    </div>
                    <br />
                    <Link to={`/borrow/${book.id}`} className="button">
                        <Button className="info">More Info</Button>
                    </Link>
                    <Link to={`/`} className="button">
                        <Button className="info">Back to Home</Button>
                    </Link>
                </div>
            )
        })}
    </>
)

export default Borrow;