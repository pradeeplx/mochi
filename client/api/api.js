import 'whatwg-fetch';

export const getUser = (username) =>
  fetch(`/users/${username}`)
  .then(res => res.json());

export const getAllUsers = () =>
  fetch('/users')
  .then(res => res.json());
