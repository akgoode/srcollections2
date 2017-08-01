import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

export class Item extends Component {

  render () {
    let item = this.props.item;
    return (
      <Link to={'/items/' + item.id} className="nolinkstyling">
        <div className="itempill">
          <div className="imgcontainer">
            <img src={item.img} alt={item.headline}/>
          </div>
          <div>
            <h2> {item.name}</h2>
            <p> {item.headline}</p>
            <p> {item.creator}</p>
          </div>
        </div>
      </Link>
    );
  }
}
