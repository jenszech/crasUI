import * as React from 'react';

import { Navbar, Nav, NavbarBrand, NavLink, NavItem, Collapse, NavbarToggler, NavbarText } from 'reactstrap';
import { Component } from 'react';
import IStateHeader from '../../shared/interface/IStateHeader';

const AVATAR = './logo256.png';
let version = '';
if (process.env.REACT_APP_VERSION !== undefined) {
  version = `v ${process.env.REACT_APP_VERSION}`;
}

class Header extends Component<any, IStateHeader> {
  constructor(props: any) {
    super(props);
    this.state = {
      collapsed: false,
    };
    console.log('Header.constructor');
  }
  componentDidMount(): void {
    console.log('Header.componentDidMount');
  }

  private toggleNavbar = (): void => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed,
    });
  };

  render(): JSX.Element {
    const { collapsed } = this.state;
    return (
      <div>
        <Navbar color="dark" dark expand="xs" style={{ height: 80 }}>
          <img src={AVATAR} alt="crasUI" className="img-fluid rounded-circle" style={{ width: 36, margin: 10 }} />
          <NavbarBrand href="/" className="mr-auto">
            CRAS UI&nbsp;
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
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
