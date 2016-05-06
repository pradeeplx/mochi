import * as actions from '../actions/actions';

const defaultUserContact = {
  firstName: null,
  lastName: null,
  email: null,
  twitterHandle: null,
  city: null,
  state: null,
};

export const userProfile = (state = defaultUserContact, action) => {
  switch (action.type) {
    case actions.RECEIVE_USER:
      return action.user ? action.user.profile : defaultUserContact;
    default:
      return state;
  }
};

const defaultUserEvents = [];

export const userEvents = (state = defaultUserEvents, action) => {
  switch (action.type) {
    case actions.RECEIVE_USER:
      return action.user ? action.user.events : defaultUserEvents;
    default:
      return state;
  }
};

export const usersList = (state = [], action) => {
  switch (action.type) {
    case actions.RECEIVE_ALL_USERS: {
      console.debug(action.users);
      if (action.users) {
        return action.users.filter(user =>
          user.profile.username !== 'gpasscornell');
      }
      return [];
    }
    default:
      return state;
  }
};
