import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AllPosts from './components/AllPosts.js';
import Navigation from './components/Navigation.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={ Navigation } />
        <Route path='/posts' component={ AllPosts } />
        <Route path='/posts/:post_id' component={ IndividualPost } />
      </div>
    );
  }
}

export default App;
