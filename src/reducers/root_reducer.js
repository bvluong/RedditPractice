import { combineReducers } from 'redux';
import postReducers from './posts_reducer';

const rootReducer = combineReducers({
  posts: postReducers
});

export default rootReducer;
