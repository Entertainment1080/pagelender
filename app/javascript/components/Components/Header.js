import React, { useState } from "react"
import { Nav, NavItem } from 'reactstrap'
import { Link, useLocation } from 'react-router-dom'

const Header = ({ sign_out_route}) => {
    const currentPage = useLocation()
    const headerClass = currentPage.pathname.replaceAll("/", "")
    return (

        <div id="header" className={headerClass}>

            <Link to="/"><h1 className="title">PageLender</h1></Link>

            <Nav>

                <NavItem>
                    <Link to="/library">Library</Link>
                </NavItem>

                <NavItem>
                    <Link to="/borrow">Borrow</Link>
                </NavItem>

                <NavItem>
                    <Link to="/lend">Lend</Link>
                </NavItem>

                <NavItem>
                    <Link to="/aboutus">About Us</Link>
                </NavItem>

                <NavItem>
                    <a href={sign_out_route}>Sign Out</a>
                </NavItem>

            </Nav>
        </div>
    )
}

export default Header;