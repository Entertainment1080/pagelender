import React from "react"
import PropTypes from "prop-types"
import { Link, useLocation } from 'react-router-dom'
import { Button } from 'reactstrap'
import Book from '../../../assets/images/book.png'

const LendedShow = ({ book, parseDate }) => {
    const currentPage = useLocation()
    const headerClass = currentPage.pathname.replace("/", "")
    return(
    <div className="page" className={headerClass}>

        {book.rentals.length > 0 &&
            <div className="page">
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
                    <p><span class="boldText">Author: </span>{book.author}</p>
                    <p><span class="boldText">Description: </span>{book.description}</p>
                    <p><span class="boldText">Pages: </span>{book.pages}</p>
                    {book.series &&
                        <p><span class="boldText">Series: </span>{book.series}</p>
                    }
                    <p><span class="boldText">Pick Up Date: </span>{parseDate(book.rentals[0].pick_up_date)}</p>
                    <p><span class="boldText">Due Date: </span>{parseDate(book.rentals[0].due_date)}</p>
                    <Link to="/library" className="button">
                        <Button className="editButton">Back to Library</Button>
                    </Link>
                </div>
            </div>
        }
        {book.rentals.length === 0 &&
            <div>
                <div className="imgCard" style={{ border: "3px solid #46C2A5" }}>
                    {book.img_url === "" &&
                        <img className="bookImg" src={Book} />
                    }
                    {book.img_url.length > 0 &&
                        <img className="bookImg" src={book.img_url} />
                    }
                </div>
                <div className="detailsCard" style={{ border: "3px solid #46C2A5" }}>
                    <h3 className="heading">{book.title}</h3>
                    <p><span class="boldText">Author: </span>{book.author}</p>
                    <p><span class="boldText">Description: </span>{book.description}</p>
                    <p><span class="boldText">Pages: </span>{book.pages}</p>
                    {book.series &&
                        <p><span class="boldText">Series: </span>{book.series}</p>
                    }
                    <Link to="/library" className="button">
                        <Button className="editButton">Back to Library</Button>
                    </Link>
                </div>
            </div>
        }
    </div>
)}

export default LendedShow;

LendedShow.propTypes = {
    book: PropTypes.shape({
        title: PropTypes.string,
        author: PropTypes.string,
        description: PropTypes.string,
        pages: PropTypes.integer,
        series: PropTypes.string,
    }).isRequired
}

