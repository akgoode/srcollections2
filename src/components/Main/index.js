import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Titlebody } from '../Titlebody';
import { Information } from '../Information';
import { ItemHandler } from '../ItemHandler';


export class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Titlebody}/>
        <Route path='/furniture'>
          <ItemHandler type="furniture"/>
        </Route>
        <Route path='/objects'>
          <ItemHandler type="objects"/>
        </Route>
        <Route path='/jewelry'>
          <ItemHandler type="jewelry"/>
        </Route>
        <Route path='/silver'>
          <ItemHandler type="silver"/>
        </Route>
        <Route path='/purses'>
          <ItemHandler type='purses'/>
        </Route>
        <Route path='/information' component={Information}/>
      </Switch>
    );
  }
}
