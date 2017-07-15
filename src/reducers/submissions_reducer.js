import RECEIVE_SUBMISSIONS from '../actions/submission_actions';
import { merge } from 'lodash';

const submissionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SUBMISSIONS:
      let subs = {};
      action.subs.forEach(sub => {
        subs[sub.data.id] = {
        id: sub.data.id,
        title: sub.data.title,
        score: sub.data.score,
        url: sub.data.url,
        created: sub.data.created
        };
      });
      let newState = merge({}, state, subs);
      console.log(action);
      console.log(subs);
      return newState;
    default:
      return state;
  }
};

export default submissionReducer;
