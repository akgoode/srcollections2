import React, { Component } from 'react';
import getItems from '../xhr';
export class Item extends Component {

  componentDidMount(){
    getItems()
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  }
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
