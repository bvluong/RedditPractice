import * as axios from 'axios';

export const fetchPosts = (username) => {
  return axios.get(`https://www.reddit.com/user/${username}/comments.json`);
};
