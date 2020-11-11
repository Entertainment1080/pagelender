import React from "react"
import { Nav, NavItem } from 'reactstrap'

const Header = ({ sign_out_route }) => (

    <div id="header">

        <a href="/"><h3 className="title">PageLender</h3></a>

        <Nav>

            <NavItem>
                <a href="/library">Library</a>
            </NavItem>

            <NavItem>
                <a href="/borrow">Borrow</a>
            </NavItem>

            <NavItem>
                <a href="/lend">Lend</a>
            </NavItem>

            <NavItem>
                <a href="/">About Us</a>
            </NavItem>

            <NavItem>
                <a href={sign_out_route}>Sign Out</a>
            </NavItem>

        </Nav>
    </div>
)

export default Header;