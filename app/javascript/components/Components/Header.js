import React, { useState } from "react"
import { Nav, NavItem } from 'reactstrap'
import { Link, useLocation } from 'react-router-dom'
import pagelenderLogo from '../../../assets/images/pagelenderLogoTransparent.png'

const Header = ({ sign_out_route }) => {
    const currentPage = useLocation()
    const headerClass = currentPage.pathname.replaceAll("/", "")
    return (

        <div id="header" className={headerClass}>

            <Link to="/"><img className="logo" src={pagelenderLogo} /></Link>

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