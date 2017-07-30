import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export class Navbar extends Component {
  render () {
    return (
      <div className="mynavbar">
        <ul>
          <Link to='/furniture/' className="navlink"><li>Furniture</li></Link>
          <Link to='/objects/' className="navlink"><li>Objects</li></Link>
          <Link to='/jewelry/' className="navlink"><li>Jewelry</li></Link>
          <Link to='/silver/' className="navlink"><li>Silver</li></Link>
          <Link to='/purses/' className="navlink"><li>Purses</li></Link>
          <Link to='/information/' className="navlink"><li>Information</li></Link>

        </ul>
      </div>
    );
  }
}
