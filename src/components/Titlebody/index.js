import React, { Component } from 'react';
import { Imagecarousel } from '../Imagecarousel';
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
