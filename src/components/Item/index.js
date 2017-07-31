import React, { Component } from 'react';
import './Item.css';

export class Item extends Component {

  render () {
    let item = this.props;
    return (
      <div className='itempill'>
        <div className="imgcontainer">
          <img src={item.img} />
        </div>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>{item.creator}</p>
      </div>
    );
  }
}
