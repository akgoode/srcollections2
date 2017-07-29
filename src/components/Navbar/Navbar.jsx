import React, { Component } from 'react';
import './Navbar.css';

export class Navbar extends Component {
  render () {
    return (
      <div className="mynavbar">
        <ul>
          <a className="navlink" href="/furniture"><li>Furniture</li></a>
          <a className="navlink" href="/objects"><li>Objects</li></a>
          <a className="navlink" href="/artists"><li>Jewelry</li></a>
          <a className="navlink" href="/silver"><li>Silver</li></a>
          <a className="navlink" href="/vintagepurses"><li>Purses</li></a>
          <a className="navlink" href="/information"><li>Information</li></a>
        </ul>
      </div>
    );
  }
}
