import React, { Component } from 'react';
import { Item } from '../Item';

export class Furniture extends Component {
  render () {
    return (
      <div>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
      </div>
    );
  }
}
