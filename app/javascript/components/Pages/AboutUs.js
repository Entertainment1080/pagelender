import React, { Component } from "react"
import { Container, Row, Col, Media } from 'reactstrap'
import { Link } from 'react-router-dom'

import david from '../../../assets/images/david.jpg'
import drew from '../../../assets/images/drew.jpg'
import joel from '../../../assets/images/joel.jpg'

export default class AboutUs extends Component {
    render() {
        const { changeColor } = this.props
        return (
            <div style={{height: "95vh"}} className="page">
                    <Container>
                    
                    <section id="appUse">
                    <h2 className="mission"> Our Mission </h2>
                        <Row>
                            <h6>
                                Are you not a fan of e books and screens? Do you prefer to have a physical text in your hand but lack the space to keep them? Do you love the smell of paper, running your fingers through the texture of the parchment, and the sensation you get when you turn the page and you’re just that much closer to finishing a book? We’re Pagelender, an easy to use alternative to help you borrow or lend a book to others in your area. If you just don’t have the space to keep books or want to prevent eye fatigue, then use Pagelender to save space, read, and enjoy! 
                            </h6>
                        </Row>
                    </section> 
                        <lr />
                    <section id="intro">
                        <h2 className="whatIsPage"> What is Pagelender? </h2>
                        <Row xs="2">
                            <Col>
                                In pellentesque massa placerat duis. Enim ut tellus elementum sagittis vitae. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Mattis pellentesque id nibh tortor. Id aliquet risus feugiat in ante metus. Orci a scelerisque purus semper eget duis at tellus. Gravida dictum fusce ut placerat. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl.
                            </Col>
                            <Col>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu. Fermentum odio eu feugiat pretium nibh ipsum consequat. Orci a scelerisque purus semper eget duis at tellus. Molestie at elementum eu facilisis sed. Ultrices dui sapien eget mi proin sed. Donec ultrices tincidunt arcu non sodales neque. Urna id volutpat lacus laoreet non curabitur gravida. Sagittis eu volutpat odio facilisis mauris sit amet massa. Faucibus et molestie ac feugiat sed lectus. Sit amet tellus cras adipiscing enim eu. Lacinia quis vel eros donec ac odio tempor. Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam.
                            </Col>
                            <Col>
                                Elementum curabitur vitae nunc sed velit dignissim sodales ut. Vestibulum morbi blandit cursus risus at ultrices mi. Sed sed risus pretium quam vulputate dignissim suspendisse. Dictum sit amet justo donec enim. Platea dictumst quisque sagittis purus sit. Vel orci porta non pulvinar neque laoreet suspendisse. Iaculis nunc sed augue lacus viverra vitae congue eu consequat. Sem integer vitae justo eget magna fermentum. At erat pellentesque adipiscing commodo elit at. Neque sodales ut etiam sit amet nisl purus.
                            </Col>
                            <Col>
                                Risus commodo viverra maecenas accumsan lacus vel. Scelerisque purus semper eget duis at. Ultricies lacus sed turpis tincidunt id aliquet risus. Feugiat scelerisque varius morbi enim nunc. Auctor urna nunc id cursus metus aliquam. Risus sed vulputate odio ut enim. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. Dictumst quisque sagittis purus sit amet volutpat consequat. Pharetra sit amet aliquam id diam maecenas ultricies. Cras fermentum odio eu feugiat pretium nibh ipsum. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Felis bibendum ut tristique et egestas quis ipsum. Sed augue lacus viverra vitae congue eu consequat. Cras pulvinar mattis nunc sed blandit. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Ultricies mi eget mauris pharetra et ultrices neque.
                            </Col>
                        </Row>
                    </section>
                    <section id="whoWeAre">
                        <h2 className="team">Meet the Team</h2>
                        <Media>
                            <Media left top href="#">
                                <Media object src={david} alt="Generic placeholder image" style={{height: "64px", width: "64px", margin: "20px"}}/>
                            </Media>
                            <Media body style={{margin: "20px"}}>
                                <Media heading={{margin: "15px"}}>
                                David
                                </Media>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </Media>
                            <Media className="mt-1" left middle href="#">
                                <Media object src={drew} alt="Generic placeholder image" style={{height: "64px", width: "64px", margin: "20px"}}/>
                            </Media>
                            <Media body style={{margin: "20px"}}>
                                <Media heading={{margin: "15px"}}>
                                Drew
                                </Media>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </Media>
                            <Media className="mt-1" left bottom href="#">
                                <Media object src={joel} alt="Generic placeholder image" style={{height: "64px", width: "64px", margin: "20px"}}/>
                            </Media>
                            <Media body style={{margin: "20px"}}>
                                <Media heading={{margin: "15px"}}>
                                Joel
                                </Media>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </Media>
                        </Media>
                    </section>
                </Container>
            </div>
        )
    }
}