// import fetch from 'whatwg-fetch';

const testUser = {
  profile: {
    email: 'sjh293@cornell.edu',
    twitter: '@seannnnnnnnnnnn',
    phone: '3479850861',
    city: 'New York',
    state: 'NY',
    first: 'Sean',
    last: 'Herman',
  },
  events: [
  ],
};

export const getUser = () => {
  return testUser;
  // fetch(`/user/${username}`)
  // .then(res => res.json())
  // .catch(err => console.error(err));
};
