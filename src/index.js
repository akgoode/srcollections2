import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter, Route, Link } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <HashRouter>
    <div>
      <Route path="/" component={App}/>
    </div>
  </HashRouter>
), document.getElementById('root'));
registerServiceWorker();
