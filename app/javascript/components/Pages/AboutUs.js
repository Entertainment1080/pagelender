import React, { Component } from "react"
import { Container, Row, Col, Media } from 'reactstrap'
import { Link } from 'react-router-dom'

import david from '../../../assets/images/david.jpg'
import drew from '../../../assets/images/drew.jpg'
import joel from '../../../assets/images/joel.jpg'

export default class AboutUs extends Component {
    render() {
        return (
            <div className="page">
                    
                    <section id="appUse">
                    <h2 className="mission"> Our Mission </h2>
                        <Row>
                            <p style={{fontSize: '20px'}}>
                                Are you not a fan of e books and screens? Do you prefer to have a physical text in your hand but lack the space to keep them? Do you love the smell of paper, running your fingers through the texture of the parchment, and the sensation you get when you turn the page and you’re just that much closer to finishing a book? We’re Pagelender, an easy to use alternative to help you borrow or lend a book to others in your area. If you just don’t have the space to keep books or want to prevent eye fatigue, then use Pagelender to save space, read, and enjoy! 
                            </p>
                        </Row>
                    </section> 
                        <br />
                        <hr className="aboutLine"/>
                        <br />
                    <section style={{margin: '25px'}} id="intro">
                        <h2 className="whatIsPage"> What is Pagelender? </h2>
                        <Row xs="2">
                            <Col>
                                <h5>Borrow a Book:</h5>
                                <p style={{fontSize: '15px'}}>Something on how to borrow a book. Something on what kind of book it could be. Something on how to get the book.</p>
                            </Col>
                            <Col>
                                <h5>Lend a Book:</h5>
                                <p style={{fontSize: '15px'}}>Something on how to lend a book. Something on what kind of book it could be. Something on how to give the book.</p>
                            </Col>
                            <Col>
                                <h5>Editing Your Book:</h5>
                                <p style={{fontSize: '15px'}}>Something on how to edit your own book. Something on why you would need or want too.</p>
                            </Col>
                            <Col>
                                <h5>Delete Your Book:</h5>
                                <p style={{fontSize: '15px'}}>Something on how to delete your book. Something on why you would want it to be deleted.</p>
                            </Col>
                        </Row>
                    </section>
                        <br />
                        <hr className="aboutLine"/>
                        <br />
                    <section style={{margin: '25px'}} id="whoWeAre">
                        <h2 className="team">Meet the Team</h2>
                        <Media>
                            <Media left top href="#">
                            <Media object src={david} alt="David Profile Pic" style={{height: "104px", width: "104px", margin: "20px"}}/>
                            </Media>
                            <Media body style={{margin: "20px", textAlign: "left"}}>
                            <Media className="teamNames" heading style={{margin: "15px", textAlign: "left"}}>
                            David
                            </Media>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </Media>
                        </Media>
                        <Media className="mt-1">
                            <Media left middle href="#">
                            <Media object src={drew} alt="David Profile Pic" style={{height: "104px", width: "104px", margin: "20px"}} />
                            </Media>
                            <Media body style={{margin: "20px", textAlign: "left"}}>
                            <Media className="teamNames" heading style={{margin: "15px", textAlign: "left"}}>
                                Drew
                            </Media>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </Media>
                        </Media>
                        <Media className="mt-1">
                            <Media left bottom href="#">
                            <Media object src={joel} alt="David Profile Pic" style={{height: "104px", width: "104px", margin: "20px"}} />
                            </Media>
                            <Media body style={{margin: "20px", textAlign: "left"}}>
                            <Media className="teamNames" heading style={{margin: "15px", textAlign: "left"}}>
                                Joel
                            </Media>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </Media>
                        </Media>
                    </section>
                 <br />
            </div>
        )
    }
}