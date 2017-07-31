import React, { Component } from 'react';
import { Item } from '../Item';
import getItems from '../xhr';
import './Itemhandler.css';

export class ItemHandler extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
    this.getCategory.bind(this);
  }

  getCategory (){
    let type = this.props.type;
    getItems()
      .then(results => {
        let typeItems = results.data.filter((item) => {
          return item.category === type;
        });
        this.setState({
          items: typeItems,
          type: type
        })
      })
      .catch(error => {
        console.error(error);
      });
  }

  componentDidMount(){
    this.getCategory();
  }

  shouldComponentUpdate (nextProps) {
    if (this.state.type !== nextProps.type) {
      return true;
    }
    return false;
  }

  componentDidUpdate () {
    this.getCategory();
  }

  render () {
    const type = this.props.type;
    return (
      <div className='itemcontainer'>
        <h3>{type.charAt(0).toUpperCase() + type.slice(1)}</h3>
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
