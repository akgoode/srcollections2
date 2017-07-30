import React, { Component } from 'react';
import getItems from '../xhr';

export class Item extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount(){
    getItems()
      .then(items => {
        this.setState({
          items: items.data
        })
      })
      .catch(error => {
        console.error(error);
      });
  }
  render () {
    return (
      <div className='item'>
        <h1>Item</h1>
        {this.state.items.map(item => {
          return (
            <ul key={item.id}>
              <li>{item.name}</li>
              <li>{item.description}</li>
            </ul>
          );
        })}
      </div>
    );
  }
}
