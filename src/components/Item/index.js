import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

export class Item extends Component {

  render () {
    let item = this.props.item;
    return (
      <Link to={'/items/' + item.id}>
        <div className="itempill">
          <div className="imgcontainer">
            <img src={item.img} alt={item.description}/>
          </div>
          <h2> {item.name}</h2>
          <p> {item.description}</p>
          <p> {item.creator}</p>
        </div>
      </Link>
    );
  }
}
