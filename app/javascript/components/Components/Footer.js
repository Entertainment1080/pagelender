import React from "react"
import { Link } from 'react-router-dom'

const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

const Footer = (props) => (

    <div id="footer">
        <p>PageLender &copy; 2020</p>
        <h5>About Us</h5>
        <div>
            {/* change so doesnt trigger on whole div */}
            <h5 onClick={scrollTop}>Back to Top</h5>
        </div>

    </div>
)

export default Footer;