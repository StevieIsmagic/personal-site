import { combineReducers } from 'redux';
import PostReducer from './postReducer.js';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostReducer
});

export default rootReducer;