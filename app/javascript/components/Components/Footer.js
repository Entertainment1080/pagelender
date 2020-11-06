import React from "react"
import { Link } from 'react-router-dom'

const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

const Footer = (props) => (

    <div id="footer">
        <p>PageLender &copy; 2020</p>
        <Link>
            <h5>About Us</h5>
        </Link>
        <Link onClick={scrollTop}>
            <h5>Back to Top</h5>
        </Link>

    </div>
)

export default Footer;