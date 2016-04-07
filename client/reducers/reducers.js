import * as actions from '../actions/actions';

const defaultUserContact = {
  firstName: null,
  lastName: null,
  email: null,
  twitterHandle: null,
  city: null,
  state: null,
};

export const userContact = (state = defaultUserContact, action) => {
  switch (action.type) {
    case actions.RECEIVE_USER:
      return action.user;
    default:
      return state;
  }
};

const defaultUserEvents = [];

export const userEvents = (state = defaultUserEvents, action) => {
  // TODO
};

const defaultEvent = {
  date: null,
  category: null,
  description: null,
  amount: null,
};
