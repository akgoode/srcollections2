import React, { Component } from 'react';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { Pagetitle } from './components/Pagetitle/Pagetitle.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pagetitle />
        <Navbar />
      </div>
    );
  }
}

export default App;
