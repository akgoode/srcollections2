import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Navbar.css';

export class ResponsiveNavbar extends Component {

  render () {
    return (
      <Navbar className="mynavbar" collapseOnSelect>
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/furniture/" className="navlink">
              <NavItem eventKey={1}>Furniture</NavItem>
            </LinkContainer>
            <LinkContainer to="/objects/" className="navlink">
              <NavItem eventKey={2}>Objects</NavItem>
            </LinkContainer>
            <LinkContainer to="/Jewelry/" className="navlink">
              <NavItem eventKey={3}>Jewelry</NavItem>
            </LinkContainer>
            <LinkContainer to="/Silver/" className="navlink">
              <NavItem eventKey={4}>Silver</NavItem>
            </LinkContainer>
            <LinkContainer to="/Purses/" className="navlink">
              <NavItem eventKey={5}>Purses</NavItem>
            </LinkContainer>
            <LinkContainer to="/Information/" className="navlink">
              <NavItem eventKey={6}>Information</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
