import * as React from 'react';

import {
    Navbar, Nav,
    NavbarBrand, NavLink, NavItem, Collapse, NavbarToggler
} from 'reactstrap';
import {Component} from "react";

const AVATAR = './logo256.png';

class Header extends Component {
    state = {
        collapsed: false
    };

    private toggleNavbar = (): void => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="xs"
                        style={{height: 80}}>
                    <img src={AVATAR} alt="crasUI" className="img-fluid rounded-circle"
                         style={{width: 36, margin: 10}}/>
                    <NavbarBrand href="/" className="mr-auto">CRAS UI&nbsp;</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2"/>
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav className="mrx-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="/overview">Raum</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="/detail">Termine</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
// noinspection JSUnusedGlobalSymbols
export default Header;