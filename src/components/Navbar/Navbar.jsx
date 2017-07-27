import React, { Component } from 'react';
import './Navbar.css';

export class Navbar extends Component {
  render () {
    return (
      <div className="navbar navbar-collapse" id="navigation">
        <ul>
          <li><a href="/furniture">Furniture</a></li>
          <li><a href="/objects">Objects</a></li>
          <li><a href="/artists">Jewelry</a></li>
          <li><a href="/silver">Silver</a></li>
          <li><a href="/vintagepurses">Purses</a></li>
          <li><a href="/information">Information</a></li>
        </ul>
      </div>
    );
  }
}
