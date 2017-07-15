import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_POSTS = "RECEIVE_POSTS";

export const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
});

export const fetchPosts = (username) => dispatch => {
  PostAPIUtil.fetchPosts(username).then(
    (posts) => ( dispatch(receivePosts(posts.data.data.children)) )
  );
};
