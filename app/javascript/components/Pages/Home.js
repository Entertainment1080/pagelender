import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import library from "../../../assets/images/libraryImg.png";
import borrow from "../../../assets/images/borrowImg.png";
import lend from "../../../assets/images/lendImg.png";

export default class Home extends Component {
    render() {
        const { changeColor } = this.props
        return (
            <div className="homePage" style={{ backgroundColor: "#ECFDFF" }}>
                <Row>
                    <Col>
                        <Link to="/library" onClick={() => changeColor("#46C2A5")}>
                            <div>
                                <img className="homeImg" src={library} />
                                <div className="text">
                                    <h3 data-testid="home" >My Library</h3>
                                    <p>Check your library to see which and when your books are due.</p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/borrow" onClick={() => changeColor("#044F6D")}>
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
                        <Link to="/lend" onClick={() => changeColor("#F8C922")}>
                            <div>
                                <img className="homeImg" src={lend} />
                                <div className="text">
                                    <h3>Lend</h3>
                                    <p>Put your books up for other users to rent.</p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                </Row>
            </div>
        )
    }
}