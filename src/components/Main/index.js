import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Titlebody } from '../Titlebody';
import { Jewelry } from '../Jewelry';
import { Furniture } from '../Furniture';
import { Objects } from '../Objects';
import { Silver } from '../Silver';
import { Purses } from '../Purses';
import { Information } from '../Information';


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
