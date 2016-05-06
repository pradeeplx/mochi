#!/usr/bin/env node

'use strict';

const cli = require('commander');
const faker = require('faker');

const makeProfile = () => ({
  username: faker.internet.userName(),
  email: faker.internet.email(),
  first: faker.name.firstName(),
  last: faker.name.lastName(),
  twitter: null,
  phoneNumber: faker.phone.phoneNumber(),
  city: faker.address.city(),
  state: faker.address.stateAbbr(),
  photo: null,
});

const makeUser = () => ({
  profile: makeProfile(),
  events: [],
});

const generateUsers = (num) => {
  for (let i = 0; i < num; i++) {
    console.dir(makeUser());
  }
};

cli
  .version('1.0.0')
  .usage('<number>')
  .action(generateUsers);

cli.parse(process.argv);
