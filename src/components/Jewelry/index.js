import React, { Component } from 'react';
import { ItemHandler } from '../ItemHandler';

export class Jewelry extends Component {
  render () {
    return (
      <div className="productpage">
        <ItemHandler type="jewelry" />
      </div>
    );
  }
}
