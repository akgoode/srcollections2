import React, { Component } from 'react';
import labels from '../../labels/sitecontent.json';
import './Pagetitle.css';

export class Pagetitle extends Component {
  render() {
    return (
      <div className="App-header">
        <h1>{labels.mainHeader}</h1>
      </div>
    );
  }
}
