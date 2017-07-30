import React, { Component } from 'react';
import { ResponsiveNavbar } from './components/Navbar';
import { Pagetitle } from './components/Pagetitle';
import { Pagefooter } from './components/Pagefooter';
import { Main } from './components/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pagetitle />
        <ResponsiveNavbar />
        <div className="maincontainer">
          <Main />
        </div>
        <Pagefooter />
      </div>
    );
  }
}

export default App;
