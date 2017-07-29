import React, { Component } from 'react';
import './Pagefooter.css';
import labels from '../../labels/sitecontent.json';

export class Pagefooter extends Component {
  render() {
    const email = "mailto:" + labels.email;
    return (
      <div className="pagefooter">
        <ul>
          <a href={email}><li>Email: {labels.email}</li></a>
          <li>Phone: {labels.phone}</li>
          <li>Locations: {labels.locations}</li>
        </ul>
        <p>{labels.copyright}</p>
      </div>
    );
  }
}
