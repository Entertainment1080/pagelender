import React, { Component } from "react"
import { Nav, NavItem } from 'reactstrap'

export default class Header extends Component {
    render(){
        const {
            logged_in,
            sign_in_route,
            sign_up_route,
            sign_out_route
        } = this.props
        return(
            <>
                <h3>PageLender</h3>

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

                    { logged_in && 
                        <NavItem>
                            <a href={sign_out_route}>Sign Out</a>
                        </NavItem>
                    }

                </Nav>
            </>
        )
    }
}