import React, { Component } from 'react';
import { Item } from '../Item';
import getItems from '../xhr';
import './Itemhandler.css';

export class ItemHandler extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount(){
    let type = this.props.type;
    getItems()
      .then(results => {
        let typeItems = results.data.filter((item) => {
          return item.category === type;
        });
        this.setState({
          items: typeItems
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
  render () {
    return (
      <div className='itemcontainer'>
        <h3>{this.props.type.charAt(0).toUpperCase() + this.props.type.slice(1)}</h3>
        {this.state.items.map(item => {
          return (
            <Item key={item.id}
                  img={item.img}
                  name={item.name}
                  description={item.description}
                  category={item.category}
                  creator={item.creator}/>
          );
        })}
      </div>
    );
  }
}
