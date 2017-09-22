import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AllPosts from './components/AllPosts.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Stevie Is Magic InsideApp.js</h2>
        </div>

        <p className="App-intro">
          This file is exported to index.js for ultimate page render as DOM 'root'
          All page routes from react-router-dom will go in this component
        </p>
        <Navigation />
        <AllPosts /> 

      </div>
    );
  }
}

export default App;
