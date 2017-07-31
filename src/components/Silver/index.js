import React, { Component } from 'react';
import { ItemHandler } from '../ItemHandler';

export class Silver extends Component {
  render () {
    return (
      <div className="productpage">
        <ItemHandler type="silver" />
      </div>
    );
  }
}
