import React, { Component } from 'react';
import './Item.css';

export class Item extends Component {

  render () {
    let item = this.props;
    return (
      <div className='item'>
        <h5>{item.name}</h5>
        <p>{item.description}</p>
        <p>{item.creator}</p>
      </div>
    );
  }
}
