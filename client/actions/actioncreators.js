
import * as actions from './actions';
import * as api from '../api';

export const requestUser = () => ({
  type: actions.FETCH_USER,
});

export const receiveUser = (user) => ({
  type: actions.RECEIVE_USER,
  user,
});

export const fetchUser = (username) =>
  dispatch => {
    dispatch(requestUser());
    // TODO: use promise when real fetches are happening
    // const user = api.getUser(username);
    // dispatch(receiveUser(user));
    return api.getUser(username)
    .then(user => dispatch(receiveUser(user)));
  };

// event types
//  meeting, donation, event, correspondence

// user page
//  array of "events"
//    events = date, event type, description, amount
//  user contact details
//  "derived" summary stats for user
//    first activity
//    last activity
//    last donation amount
//    YTD total
