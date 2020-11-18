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
                        <p style={{ fontSize: '20px' }}>
                            Are you not a fan of e books and screens? Do you prefer to have a physical text in your hand but lack the space to keep them? Do you love the smell of paper, running your fingers through the texture of the parchment, and the sensation you get when you turn the page and you’re just that much closer to finishing a book? We’re Pagelender, an easy to use alternative to help you borrow or lend a book to others in your area. If you just don’t have the space to keep books or want to prevent eye fatigue, then use Pagelender to save space, read, and enjoy!
                            </p>
                    </Row>
                </section>
                <br />
                <hr className="aboutLine" />
                <br />
                <section style={{ margin: '25px' }} id="intro">
                    <h2 className="whatIsPage"> What is Pagelender? </h2>
                    <Row xs="3">
                        <Col>
                            <h5>Library:</h5>
                            <p style={{ fontSize: '15px' }}>In your Library, you can see three different tables for books you have borrowed, books you have lent, and your books that are available. Here, you are able to see  the books you are borrowing from other users as well as see the books that people have borrowed from you. Additionaly, you can return a book early or cancel the pick up, and as see who you are borrowing the book from and how to contact them by clicking on a book title in the first table. You can also edit or delete your book listing before someone decides to borrow it form you.</p>
                        </Col>
                        <Col>
                            <h5>Borrow:</h5>
                            <p style={{ fontSize: '15px' }}>In Borrow, users can see all available books from other users. Users can click on more info to see the book details and trusted reviews from Goodreads, then decide if they want to borrow it or not. Once borrowed, users will be able to see the book inside of Borrowed table in their Library.</p>
                        </Col>
                        <Col>
                            <h5>Lend:</h5>
                            <p style={{ fontSize: '15px' }}>In Lend, users can create a listing for a book they want to put up so others can borrow. Users will be bet with a form to add any important information about the book they are putting up. Once posted, that book listing will be in the users Available Books table in their Library until someone borrows it from them.</p>
                        </Col>
                    </Row>
                </section>
                <br />
                <hr className="aboutLine" />
                <br />
                <section style={{ margin: '25px' }} id="whoWeAre">
                    <h2 className="team">Meet the Team</h2>
                    <Media>
                        <Media left top href="#">
                            <Media object src={david} alt="David Profile Pic" style={{ height: "145px", width: "145px", margin: "20px", borderRadius: "15px" }} />
                        </Media>
                        <Media body style={{ margin: "20px", textAlign: "left" }}>
                            <Media className="teamNames" heading style={{ textAlign: "left" }}>
                                David
                            </Media>
                            As the Design Lead, David was in charge of the overall design process of Pagelender. He created a low fidelity design prototype and wireframe using Balsamiq, and transitioned that skeleton over into a high fidelity design prototype on Figma. With a template to work off of, David was able to style a majority of the react-in-rails application with the help of his teammates.
                            <br />
                            <br />
                            David is a full-stack developer/product designer and is a member of the Delta 2020 cohort at LEARN Academy. He is confident in his skills as a designer and is always eager to learn more about full-stack and further his skillset with practice.
                            <br />
                            <br />
                            Check him out at:
                            <a target="_blank" className="aboutUsLink" href="https://github.com/davidkim4" ><p>Github</p></a>
                            <a target="_blank" className="aboutUsLink" href="https://www.linkedin.com/in/david-khangseok-kim/"><p>LinkedIn</p></a>
                        </Media>
                    </Media>
                    <Media className="mt-1">
                        <Media left middle href="#">
                            <Media object src={drew} alt="David Profile Pic" style={{ height: "145px", width: "145px", margin: "20px", borderRadius: "15px" }} />
                        </Media>
                        <Media body style={{ margin: "20px", textAlign: "left" }}>
                            <Media className="teamNames" heading style={{ textAlign: "left" }}>
                                Drew
                            </Media>
                            As the Tech Lead, Drew coded most of the logic and functionality in the application, maintained GitHub integrity, and facilitated turning his teammate's design and vision into code on the screen.
                            <br />
                            <br />
                            Drew is a full-stack developer and Delta 2020 cohort member at LEARN Academy. He is passionate about creative problem-solving and intuitive and accessible web applications. He is also an actor throughout San Diego at such theaters as the La Jolla Playhouse, San Diego Musical Theater, Cygnet Theater, The Moonlight Amphitheater and many more.
                            <br />
                            <br />
                            Check him out at:
                            <a target="_blank" className="aboutUsLink" href="https://github.com/Drewbrad4"><p>Github</p></a>
                            <a target="_blank" className="aboutUsLink" href="https://www.linkedin.com/in/drewbrad4"><p>LinkedIn</p></a>
                        </Media>
                    </Media>
                    <Media className="mt-1">
                        <Media left bottom href="#">
                            <Media object src={joel} alt="David Profile Pic" style={{ height: "145px", width: "145px", margin: "20px", borderRadius: "15px" }} />
                        </Media>
                        <Media body style={{ margin: "20px", textAlign: "left" }}>
                            <Media className="teamNames" heading style={{ textAlign: "left" }}>
                                Joel
                            </Media>
                            As the Production Lead, Joel oversaw and supported both the technical development and design creation of Pagelender. He created multiple images, logos, and helped in both programming and designing the app.
                            <br />
                            <br />
                            Joel is a full-stack web developer backed with 4 years of experience in video production, marketing, team leadership, and customer service. Believes that every person has a story to tell and that technology allows for individuals to share those experiences together. He is excited to bring a storytelling driven approach to web development and design.
                            <br />
                            Check him out at:
                            <a target="_blank" className="aboutUsLink" href="https://www.linkedin.com/in/devjoelmichael/"><p>LinkedIn</p></a>
                            <a target="_blank" className="aboutUsLink" href="https://github.com/devJoelMichael"><p>Github</p></a>
                            <a target="_blank" className="aboutUsLink" href="https://twitter.com/devJoelMichael"><p>Twitter</p></a>
                        </Media>
                    </Media>
                </section>
                <br />
            </div>
        )
    }
}