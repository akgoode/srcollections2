import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Titlebody } from '../Titlebody';
import { Information } from '../Information';
import { CategoryPage } from '../CategoryPage';

export class Main extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Titlebody}/>
        <Route exact path='/furniture'>
          <CategoryPage type="furniture" onClick={this.handleClick} />
        </Route>
        <Route exact path='/objects'>
          <CategoryPage type="objects"/>
        </Route>
        <Route exact path='/jewelry'>
          <CategoryPage type="jewelry"/>
        </Route>
        <Route exact path='/silver'>
          <CategoryPage type="silver"/>
        </Route>
        <Route exact path='/purses'>
          <CategoryPage type='purses'/>
        </Route>
        <Route exact path='/information' component={Information}/>
      </Switch>
    );
  }
}
