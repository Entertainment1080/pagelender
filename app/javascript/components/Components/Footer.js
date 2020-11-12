import React from "react"
import { Link } from 'react-router-dom'

const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

const Footer = (props) => (

    <div id="footer">
        <p id="copy">PageLender &copy; 2020</p>
        <h5 id="top" onClick={scrollTop}>Back to Top</h5>
    </div>
)

export default Footer;