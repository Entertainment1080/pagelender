import React, { Component } from "react"
import { Row, Col } from "reactstrap"
import { Link } from 'react-router-dom'
import library from '../../../assets/images/libraryImg.png'
import borrow from '../../../assets/images/borrowImg.png'
import lend from '../../../assets/images/lendImg.png'

export default class Home extends Component {
    render() {
        return (
            <div className="homePage" style={{ backgroundColor: "#ECFDFF" }}>
                <Row>
                    <Col>
                        <Link to="/library">
                            <div>
                                <img className="homeImg" src={library} />
                                <div className="text">
                                    <h3>My Library</h3>
                                    <p>Check your library to see which and when your books are due.</p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/borrow">
                            <div>
                                <img className="homeImg" src={borrow} />
                                <div className="text">
                                    <h3>Borrow</h3>
                                    <p>Search for a book you’re looking for and the area to see who's willing to lend it out.</p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/lend">
                            <div>
                                <img className="homeImg" src={lend} />
                                <div className="text">
                                    <h3>Lend</h3>
                                    <p>Put your books up for other users to borrow.</p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                </Row>
            </div>
        )
    }
}