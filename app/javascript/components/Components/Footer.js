import React from "react"
import { useLocation, Link } from 'react-router-dom'

const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

const Footer = () => {
    const currentPage = useLocation()
    const headerClass = currentPage.pathname.replace("/", "")
    return (

        <div id="footer" className={headerClass}>
            <p style={{ color: "white" }} id="copy">PageLender &copy; 2020</p>
            <Link style={{ color: "white" }} id="top" onClick={scrollTop}>Back to Top</Link>
        </div>

    )
}

export default Footer;