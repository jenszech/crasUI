import * as React from 'react';

import { Navbar, Nav, NavbarBrand, NavLink, NavItem, Collapse, NavbarToggler, NavbarText } from 'reactstrap';
import { Component } from 'react';

const AVATAR = './logo256.png';
let version = '';
if (process.env.REACT_APP_VERSION !== undefined) {
  version = `v ${process.env.REACT_APP_VERSION}`;
}

class Header extends Component {
  state = {
    collapsed: false,
  };

  constructor(props: any) {
    super(props);
    console.log('Header.constructor');
  }
  componentDidMount() {
    console.log('Header.componentDidMount');
  }

  private toggleNavbar = (): void => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render(): JSX.Element {
    return (
      <div>
        <Navbar color="dark" dark expand="xs" style={{ height: 80 }}>
          <img src={AVATAR} alt="crasUI" className="img-fluid rounded-circle" style={{ width: 36, margin: 10 }} />
          <NavbarBrand href="/" className="mr-auto">
            CRAS UI&nbsp;
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              {/*
                            <NavItem>
                                <NavLink href="/overview">Raum</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="/detail">Termine</NavLink>
                            </NavItem>
                            */}
            </Nav>
            <NavbarText>{version}</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
// noinspection JSUnusedGlobalSymbols
export default Header;
