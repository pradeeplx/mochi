
import * as actions from './actions';
import * as api from '../api';

const requestUser = () => ({
  type: actions.FETCH_USER,
});

const receiveUser = (user) => ({
  type: actions.RECEIVE_USER,
  user,
});

export const fetchUser = (username) =>
  dispatch => {
    dispatch(requestUser());
    return api.getUser(username)
    .then(user => dispatch(receiveUser(user)));
  };

const requestAllUsers = () => ({
  type: actions.FETCH_ALL_USERS,
});

const receiveAllUsers = (users) => ({
  type: actions.RECEIVE_ALL_USERS,
  users,
});

export const fetchAllUsers = () =>
  dispatch => {
    dispatch(requestAllUsers());
    return api.getAllUsers()
    .then(users => dispatch(receiveAllUsers(users)));
  };

const addUserEvent = (username, event) => ({
  type: actions.ADD_USER_EVENT,
  username,
  event,
});

export const submitUserEvent = (username, event) =>
  dispatch => {
    dispatch(addUserEvent(username, event));
    return api.addUserEvent(username, event)
    .then(() => {
      console.debug(`Refetching username '${username}' with new event`);
      fetchUser(username);
    }, (err) => {
      console.error(err);
    });
  };
