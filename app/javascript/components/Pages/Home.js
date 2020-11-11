import React, { Component } from "react"
import { Row, Col } from "reactstrap"
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <>
                <Row>
                    <Col>
                        <Link to="/library">
                            <button>
                                <div>
                                    <h3>My Library</h3>
                                </div>
                                <div>
                                    <p>Check your library to see which and when your books are due.</p>
                                </div>
                            </button>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/borrow">
                            <button>
                                <div>
                                    <h3>Borrow</h3>
                                </div>
                                <div>
                                    <p>Search for a book you’re looking for and the area to see who's willing to lend it out.</p>
                                </div>
                            </button>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/lend">
                            <button>
                                <div>
                                    <h3>Lend</h3>
                                </div>
                                <div>
                                    <p>Put your books up for other users to rent.</p>
                                </div>
                            </button>
                        </Link>
                    </Col>
                </Row>
            </>
        )
    }
}