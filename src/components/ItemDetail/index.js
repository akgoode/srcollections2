import React, { Component } from 'react';
import { getItem } from '../xhr';

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
        <div>
          <h1>{item.name}</h1>
          <div>
            <img src={item.img} alt="item" />
          </div>
          <p>{item.description}</p>
          <p>{item.creator}</p>
        </div>
      );
    }
  }
}
