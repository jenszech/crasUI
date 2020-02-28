import * as React from 'react';
import {useState} from 'react';

import {
    Navbar, Nav,
    NavbarBrand, NavLink, NavItem, Collapse, NavbarToggler
} from 'reactstrap';

const AVATAR = './logo256.png';

const Header = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
            <Navbar color="dark" dark expand="xs"
                    style={{height: 80}}>
                <img src={AVATAR} alt="KRAS" className="img-fluid rounded-circle" style={{width: 36, margin: 10}}/>
                <NavbarBrand href="/" className="mr-auto">CRAS UI&nbsp;</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2"/>
                <Collapse isOpen={!collapsed} navbar>
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
};
export default Header;