import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './Navbar.css';

export class ResponsiveNavbar extends Component {

  // const navbarInstance = (
  //   <Navbar inverse collapseOnSelect>
  //     <Navbar.Header>
  //       <Navbar.Brand>
  //         <a href="#">React-Bootstrap</a>
  //       </Navbar.Brand>
  //       <Navbar.Toggle />
  //     </Navbar.Header>
  //     <Navbar.Collapse>
  //       <Nav>
  //         <NavItem eventKey={1} href="#">Link</NavItem>
  //         <NavItem eventKey={2} href="#">Link</NavItem>
  //         <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
  //           <MenuItem eventKey={3.1}>Action</MenuItem>
  //           <MenuItem eventKey={3.2}>Another action</MenuItem>
  //           <MenuItem eventKey={3.3}>Something else here</MenuItem>
  //           <MenuItem divider />
  //           <MenuItem eventKey={3.3}>Separated link</MenuItem>
  //         </NavDropdown>
  //       </Nav>
  //       <Nav pullRight>
  //         <NavItem eventKey={1} href="#">Link Right</NavItem>
  //         <NavItem eventKey={2} href="#">Link Right</NavItem>
  //       </Nav>
  //     </Navbar.Collapse>
  //   </Navbar>
  // );
  //
  // const currentNav = (
  //   <div className="mynavbar">
  //     <ul>
  //       <Link to='/furniture/' className="navlink"><li>Furniture</li></Link>
  //       <Link to='/objects/' className="navlink"><li>Objects</li></Link>
  //       <Link to='/jewelry/' className="navlink"><li>Jewelry</li></Link>
  //       <Link to='/silver/' className="navlink"><li>Silver</li></Link>
  //       <Link to='/purses/' className="navlink"><li>Purses</li></Link>
  //       <Link to='/information/' className="navlink"><li>Information</li></Link>
  //
  //     </ul>
  //   </div>
  // );

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
