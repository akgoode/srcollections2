import React, { Component } from 'react';
import './Pagefooter.css';
import labels from '../../labels/sitecontent.json';

export class Pagefooter extends Component {
  render() {
    const email = "mailto:" + labels.email;
    return (
      <div className="pagefooter">
        <ul>
          <li><a href={email}>Email</a></li>
          <li>Phone: {labels.phone}</li>
          <li>Locations: {labels.locations}</li>
        </ul>
      </div>
    );
  }
}
