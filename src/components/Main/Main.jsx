import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Titlebody } from '../Titlebody/Titlebody.jsx';
import { Jewelry } from '../Jewelry/Jewelry.jsx';
import { Furniture } from '../Furniture/Furniture.jsx';
import { Objects } from '../Objects/Objects.jsx';
import { Silver } from '../Silver/Silver.jsx';
import { Purses } from '../Purses/Purses.jsx';
import { Information } from '../Information/Information.jsx';


export class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Titlebody}/>
        <Route path='/furniture' component={Furniture}/>
        <Route path='/objects' component={Objects}/>
        <Route path='/jewelry' component={Jewelry}/>
        <Route path='/silver' component={Silver}/>
        <Route path='/purses' component={Purses}/>
        <Route path='/information' component={Information}/>
      </Switch>
    );
  }
}
