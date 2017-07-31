import React, { Component } from 'react';
import { ItemHandler } from '../ItemHandler';

export class Purses extends Component {
  render () {
    return (
      <div className="productpage">
        <ItemHandler type="purses" />
      </div>
    );
  }
}
