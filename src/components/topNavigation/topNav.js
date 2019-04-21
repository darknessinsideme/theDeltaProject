import React from 'react';
import logo from './logo.png'
import searchIcon from './SearchIcon.png'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    return (
      <div style={{backgrogund : 'lightBlue'}}>
        <Navbar color="light" light expand="md">
        <NavbarBrand>
          <a href="/">
              <img src={logo}  style={{width: '50%',top: 0,left: 0, height:"50px" ,marginLeft: '55px'}} key='companeyLogo'  alt='companeyLogo'/>
          </a>
        </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">
                    <img src={searchIcon}  style={{width: '30px', height:"30px" }} key='searchIcon' alt="searchIcon"/>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">About us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login">Upload Cv</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login">{this.props.loginStatus ? 'Log out': 'Log in'}</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}