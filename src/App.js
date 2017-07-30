import React, { Component } from 'react';
import { ResponsiveNavbar } from './components/Navbar/Navbar.jsx';
import { Pagetitle } from './components/Pagetitle/Pagetitle.jsx';
import { Pagefooter } from './components/Pagefooter/Pagefooter.jsx';
import { Main } from './components/Main/Main.jsx';
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
