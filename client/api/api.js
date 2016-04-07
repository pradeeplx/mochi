import fetch from 'whatwg-fetch';

export const getUser = (username) => {
  fetch(`/user/${username}`)
  .then(res => res.json());
};
