import { combineReducers } from 'redux';
import postReducers from './posts_reducer';
import submissionReducer from './submissions_reducer';

const rootReducer = combineReducers({
  posts: postReducers,
  subs: submissionReducer

});

export default rootReducer;
