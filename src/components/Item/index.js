import React, { Component } from 'react';

export class Item extends Component {
  render () {
    return (
      <div className='item'>
        <h1>Item!</h1>
        <p>Item name</p>
        <p>Item description</p>
      </div>
    );
  }
}
