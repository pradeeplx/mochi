import 'whatwg-fetch';

export const getUser = (username) =>
  fetch(`/users/${username}`)
  .then(res => res.json());

export const getAllUsers = () =>
  fetch('/users')
  .then(res => res.json());

export const addUserEvent = (username, event) =>
  fetch(`/users/${username}/events`, {
    method: 'POST',
    body: JSON.stringify(event),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    console.debug('Finished adding user event', res);
    return res.json();
  }, (err) => { throw err; });
