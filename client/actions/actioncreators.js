
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
