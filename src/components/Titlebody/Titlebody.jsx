import React, { Component } from 'react';
import { Imagecarousel } from '../Imagecarousel/Imagecarousel.jsx';
import './Titlebody.css';

export class Titlebody extends Component {
  render() {
    return (
      <div className="titlebody">
        <Imagecarousel />
      </div>
    );
  }
}
