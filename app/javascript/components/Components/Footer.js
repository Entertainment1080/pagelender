import React from "react"
import { Link } from 'react-router-dom'

const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

const Footer = (props) => (

    <div id="footer">
        <p id="copy">PageLender &copy; 2020</p>
        <h6 id="top" onClick={scrollTop}>Back to Top</h6>
    </div>
)

export default Footer;