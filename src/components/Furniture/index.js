import React, { Component } from 'react';
import { ItemHandler } from '../ItemHandler';

export class Furniture extends Component {
  render () {
    return (
      <div>
        <ItemHandler type="furniture"/>
      </div>
    );
  }
}
