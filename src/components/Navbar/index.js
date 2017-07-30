import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
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
            <NavItem eventKey={1}><Link to='/furniture/' className="navlink"><li>Furniture</li></Link></NavItem>
            <NavItem eventKey={2}><Link to='/objects/' className="navlink"><li>Objects</li></Link></NavItem>
            <NavItem eventKey={3}><Link to='/jewelry/' className="navlink"><li>Jewelry</li></Link></NavItem>
            <NavItem eventKey={4}><Link to='/silver/' className="navlink"><li>Silver</li></Link></NavItem>
            <NavItem eventKey={5}><Link to='/purses/' className="navlink"><li>Purses</li></Link></NavItem>
            <NavItem eventKey={6}><Link to='/information/' className="navlink"><li>Information</li></Link></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
