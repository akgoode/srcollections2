import React, { Component } from 'react';
import { getItem } from '../xhr';
import './ItemDetail.css';

export class ItemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { item: ''};
  }

  componentDidMount() {
    getItem(this.props.match.params.id)
      .then(data => {
        this.setState({
          item: data.data
        })
      })
      .catch();
  }

  render () {
    const item = this.state.item;
    if (this.state.item === ''){
      return <div></div>;
    } else {
      return(
        <div className="detailcontainer">
          <h1>{item.name}</h1>
          <div className="detailimgcontainer">
            <img src={item.img} alt="item" />
          </div>
          <div className="detailtext">
            <p>{item.description}</p>
            <p>{item.creator}</p>
          </div>
        </div>
      );
    }
  }
}
