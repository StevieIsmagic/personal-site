import React from 'react'
import ReactDOM from 'react-dom'
//import App from './App';
import AllPosts from './components/AllPosts.js'
import Navigation from './components/Navigation.js'
import IndividualPost from './components/IndividualPost.js'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import rootReducer from './reducers/index.js'
import Contact from './components/Contact'
import About from './components/About'
import Home from './components/Home'

import './index.css'

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(
  createStore
)
let store = createStoreWithMiddleware(rootReducer)
console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="App">
        <Route path="/" component={Navigation} />
        <Route path="/posts" component={AllPosts} />
        <Route path="/posts/:post_id" component={IndividualPost} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
