import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Sidebar from './components/Sidebar.js';
import Content from './components/Content.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Sidebar/>
        <Content/>
      </div>
    );
  }
}

export default App;
