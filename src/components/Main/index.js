import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Titlebody } from '../Titlebody';
import { Information } from '../Information';
import { CategoryPage } from '../CategoryPage';
import { ItemDetail } from '../ItemDetail';

export class Main extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Titlebody}/>
        <Route path = '/furniture/'>
          <CategoryPage type="furniture"/>
        </Route>
        <Route path='/objects'>
          <CategoryPage type="objects"/>
        </Route>
        <Route path='/jewelry'>
          <CategoryPage type="jewelry"/>
        </Route>
        <Route path='/silver'>
          <CategoryPage type="silver"/>
        </Route>
        <Route path='/purses'>
          <CategoryPage type='purses'/>
        </Route>
        <Route path='/information' component={Information}/>
        <Route path='/items/:id' component={ItemDetail}/>
      </Switch>
    );
  }
}
