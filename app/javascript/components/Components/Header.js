import React from "react"
import { Nav, NavItem } from 'reactstrap'

const Header = (props) => (

    <div id="header">

        <h3 className="title">PageLender</h3>

        <Nav>

            <NavItem>
                <a href="/">Home</a>
            </NavItem>

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
                <a href={props.sign_out_route}>Sign Out</a>
            </NavItem>

        </Nav>
    </div>
)

export default Header;