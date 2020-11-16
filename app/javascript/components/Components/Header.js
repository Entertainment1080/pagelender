import React, { useState } from "react"
import { Nav, NavItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const Header = ({ sign_out_route, changeColor, headerColor, changeButtonColor, headerButtonBackgroundColor, changeButtonTextColor, headerButtonTextColor }) => {
    return (

        <div id="header" style={{ backgroundColor: headerColor }} >

            <a href="/"><h2 className="title">PageLender</h2></a>

            <Nav>

                <NavItem >
                    <Link to="/library" onClick={() =>
                        changeColor("#46C2A5")
                        // changeButtonColor("#E3F8F2"),
                        // changeButtonTextColor("#46C2A5")
                    }>Library</Link>
                </NavItem>

                <NavItem style={{ backgroundColor: headerColor }}>
                    <Link to="/borrow" onClick={() => changeColor("#044F6D")}>Borrow</Link>
                </NavItem>

                <NavItem>
                    <Link to="/lend" onClick={() => changeColor("#F8C922")}>Lend</Link>
                </NavItem>

                <NavItem>
                    <Link to="/" onClick={() => changeColor("#044F6D")}>About Us</Link>
                </NavItem>

                <NavItem>
                    <a href={sign_out_route}>Sign Out</a>
                </NavItem>

            </Nav>
        </div >
    )
}

export default Header;