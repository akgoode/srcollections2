import React, { Component } from 'react';
import './Navbar.css';

export class Navbar extends Component {
  render () {
    return (
      <div className="navbar navbar-collapse" id="navigation">
        <ul>
          <li><a className="navlink" href="/furniture">Furniture</a></li>
          <li><a className="navlink" href="/objects">Objects</a></li>
          <li><a className="navlink" href="/artists">Jewelry</a></li>
          <li><a className="navlink" href="/silver">Silver</a></li>
          <li><a className="navlink" href="/vintagepurses">Purses</a></li>
          <li><a className="navlink" href="/information">Information</a></li>
        </ul>
      </div>
    );
  }
}
