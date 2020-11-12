import React from "react"
import { Nav, NavItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const Header = ({ sign_out_route }) => (

    <div id="header">

        <a href="/"><h2 className="title">PageLender</h2></a>

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
                <Link to="/">About Us</Link>
            </NavItem>

            <NavItem>
                <a href={sign_out_route}>Sign Out</a>
            </NavItem>

        </Nav>
    </div>
)

export default Header;