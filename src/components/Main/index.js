import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Titlebody } from '../Titlebody';
import { Information } from '../Information';
import { CategoryPage } from '../CategoryPage';
import { ItemDetail } from '../ItemDetail';
import labels from '../../labels/sitecontent.json';

export class Main extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Titlebody}/>
        { labels.categories.map(category => {
          return (
            <Route key={labels.categories.indexOf(category) + 1} path = {`/${category.name}/`}>
              <CategoryPage type={`${category.name}`}/>
            </Route>
          );
        })}
        <Route path='/information' component={Information}/>
        <Route path='/items/:id' component={ItemDetail}/>
      </Switch>
    );
  }
}
