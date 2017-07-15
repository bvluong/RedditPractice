import { RECEIVE_POSTS }  from '../actions/post_actions';
import { merge, values } from 'lodash';

const postReducers = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POSTS:
      let newState = merge({}, state, action.posts);
      let posts = {};
      action.posts.forEach(post => {
        posts[post.data.id] = {
        id: post.data.id,
        body: post.data.body,
        score: post.data.score,
        created: post.data.created
        };
      });
      return newState;
    default:
      return state;
  }
};

export default postReducers;
