import React, { Component } from 'react';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { Pagetitle } from './components/Pagetitle/Pagetitle.jsx';
import { Titlebody } from './components/Titlebody/Titlebody.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pagetitle />
        <Navbar />
        <Titlebody />
      </div>
    );
  }
}

export default App;
