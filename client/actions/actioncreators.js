
import * as actions from './actions';
import * as api from '../api';

export const requestUser = () => ({
  type: actions.FETCH_USER,
});

export const receiveUser = (user) => ({
  type: actions.RECEIVE_USER,
  user,
});

export const requestAllUsers = () => ({
  type: actions.FETCH_ALL_USERS,
});

export const receiveAllUsers = (users) => ({
  type: actions.RECEIVE_ALL_USERS,
  users,
});

export const fetchUser = (username) =>
  dispatch => {
    dispatch(requestUser());
    return api.getUser(username)
    .then(user => dispatch(receiveUser(user)));
  };
