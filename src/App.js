import React, { Component } from 'react';
import Navigation from './components/Navigation.js';
import './App.css';
import Sidebar from './components/Sidebar'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navigation />
        <Sidebar />
        <Navigation />
        <h1>try to break</h1>
      </div> 
    );
  }
}

export default App;
