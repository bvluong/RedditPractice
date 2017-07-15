import * as axios from 'axios';

export const fetchPosts = (username) => {
  return axios.get(`https://www.reddit.com/user/${username}/comments.json`);
};

export const fetchSubmissions = (username) => {
  return axios.get(`https://www.reddit.com/user/${username}/submitted.json`);
};
