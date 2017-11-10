import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Navbar.css';
import labels from '../../labels/sitecontent.json';

export class ResponsiveNavbar extends Component {

  render () {
    return (
      <Navbar className="mynavbar" collapseOnSelect>
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            { labels.categories.map(category => {
              return (
                <LinkContainer to={ "/" + category.name + "/" } className="navlink">
                  <NavItem eventKey={labels.categories.indexOf(category) + 1}>{ category.name }</NavItem>
                </LinkContainer>
              );
            })}
            <LinkContainer to="/information/" className="navlink">
              <NavItem eventKey={labels.categories.length}>Information</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
