import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AllPosts from './components/AllPosts.js';
import Navigation from './components/Navigation.js';
import IndividualPost from './components/IndividualPost.js';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import ReduxThunk from 'redux-thunk';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
//import reducers from './reducers';
import './index.css';

//const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

ReactDOM.render(
  //<Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <Router>
      <div className="App">
        <Route path='/' component={ Navigation } />
        <Route path='/posts' component={ AllPosts } />
        <Route path='/posts/:post_id' component={ IndividualPost } />
      </div>
    </Router>
  //</Provider>
, document.getElementById('root'));

