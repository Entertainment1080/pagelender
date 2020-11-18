import React from "react"
import { Link, useLocation } from 'react-router-dom'

const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

const Footer = () => {
    const currentPage = useLocation()
    const headerClass = currentPage.pathname.replace("/", "")
    return (

    <div id="footer" className={headerClass}>
        <p style={{ color: "white"}}  id="copy">PageLender &copy; 2020</p>
        <h6 style={{ color: "white"}} id="top" onClick={scrollTop}>Back to Top</h6>
    </div>

    )}

export default Footer;