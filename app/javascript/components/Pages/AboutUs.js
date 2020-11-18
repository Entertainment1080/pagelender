import React, { Component } from "react"
import { Row, Col, Media } from 'reactstrap'
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
                                <p style={{fontSize: '15px'}}>Something on how to borrow a book. Something on what kind of book it could be. Something on how to get the book.</p>
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
                            <Media object src={david} alt="David Profile Pic" style={{height: "145px", width: "145px", margin: "20px"}}/>
                            </Media>
                            <Media body style={{margin: "20px", textAlign: "left"}}>
                            <Media className="teamNames" heading style={{margin: "15px", textAlign: "left"}}>
                            David
                            </Media>
                            As the Design Lead, David was in charge of the overall design process of Pagelender. He created a low fidelity design prototype and wireframe using Balsamiq, and transitioned that skeleton over into a high fidelity design prototype on Figma. With a template to work off of, David was able to style a majority of the react-in-rails application with the help of his teammates. 
                            <br/>
                            <br/>
                            David is a full-stack developer/product designer and is a member of the Delta 2020 cohort at LEARN Academy. He is confident in his skills as a designer and is always eager to learn more about full-stack and further his skillset with practice. 
                            <br/>
                            See more of his work:
                            <a target="_blank" href="https://github.com/davidkim4"><p style={{color: "black"}}>Github</p></a>
                            </Media>
                        </Media>
                        <Media className="mt-1">
                            <Media left middle href="#">
                            <Media object src={drew} alt="David Profile Pic" style={{height: "145px", width: "145px", margin: "20px"}} />
                            </Media>
                            <Media body style={{margin: "20px", textAlign: "left"}}>
                            <Media className="teamNames" heading style={{margin: "15px", textAlign: "left"}}>
                                Drew
                            </Media>
                            Drew is a full-stack developer and Delta 2020 cohort member at LEARN Academy. He is passionate about creative problem-solving and intuitive and accessible web applications. He is also an actor all around San Diego at such theaters as the La Jolla Playhouse, San Diego Musical Theater, Cygnet Theater, The Moonlight Amphitheater and many more. 
                            <br/>
                            Check him out at:
                            <a target="_blank" href="https://github.com/Drewbrad4"><p style={{color: "black"}}>Github</p></a>
                            </Media>
                        </Media>
                        <Media className="mt-1">
                            <Media left bottom href="#">
                            <Media object src={joel} alt="David Profile Pic" style={{height: "145px", width: "145px", margin: "20px"}} />
                            </Media>
                            <Media body style={{margin: "20px", textAlign: "left"}}>
                            <Media className="teamNames" heading style={{margin: "15px", textAlign: "left"}}>
                                Joel
                            </Media>
                            As the Production Lead, Joel oversaw and supported both the technical development and design creation of Pagelender. He created multiple images, logos, and helped in both programming and designing the app.
                            <br/>
                            <br />
                            Joel is a full-stack web developer backed with 4 years of experience in video production, marketing, team leadership, and customer service. Believes that every person has a story to tell and that technology allows for individuals to share those experiences together. He is excited to bring a storytelling driven approach to web development and design.
                            <br/>
                            Check him out at:
                            <a target="_blank" href="https://www.linkedin.com/in/devjoelmichael/"><p style={{color: "black", fontSize: "bolder"}}>LinkedIn</p></a>
                            <a target="_blank" href="https://github.com/devJoelMichael"><p style={{color: "black"}}>Github</p></a>
                            <a target="_blank" href="https://twitter.com/devJoelMichael"><p style={{color: "black"}}>Twitter</p></a>
                            </Media>
                        </Media>
                    </section>
                 <br />
            </div>
        )
    }
}