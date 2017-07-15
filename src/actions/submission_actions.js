import * as SubAPIUtil from '../util/post_api_util';

export const RECEIVE_SUBMISSIONS = "RECEIVE_SUBMISSIONS";

export const receiveSubmission = (sub) => ({
  type: RECEIVE_SUBMISSIONS,
  sub
});

export const fetchSubmissions = (username) => dispatch => (
  SubAPIUtil.fetchSubmissions(username).then(
    res => dispatch(receiveSubmission(res.data.data))
  )
);
