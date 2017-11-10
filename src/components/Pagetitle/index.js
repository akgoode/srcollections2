import React, { Component } from 'react';
import labels from '../../labels/sitecontent.json';
import { Link } from 'react-router-dom';
import './Pagetitle.css';

export class Pagetitle extends Component {
  render() {
    return (
      <div className="App-header">
        <Link to='/' className="linkstyles">
          <h1>{labels.mainHeader}</h1>
          <p>{labels.subHeader}</p>
        </Link>
      </div>
    );
  }
}
