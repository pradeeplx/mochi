import 'whatwg-fetch';

export const getUser = (username) =>
  fetch(`/users/${username}`)
  .then(res => res.json())
  .catch(err => (null));
