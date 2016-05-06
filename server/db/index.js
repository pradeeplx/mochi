'use strict';

const path = require('path');
const fs = require('fs');
const _ = require('lodash');
const log = require('server/loggers');

const USERS_PATH = path.join(__dirname, 'users');

const userFilename = (username) => path.join(USERS_PATH, `${username}.json`);

const sortEvents = (events) =>
  events.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    if (dateA > dateB) {
      return -1;
    }
    if (dateA < dateB) {
      return 1;
    }
    return 0;
  });

/**
 * @param  {string}   username
 * @param  {Function} callback
 */
const getUser = (username, callback) => {
  log.info(`Loading username "${username}"`);
  const filePath = userFilename(username);

  // Check if the username exists
  fs.stat(filePath, (err) => {
    if (err) {
      log.info('Username does not exist');
      return callback(null, {});
    }
    const user = require(filePath);
    user.events = sortEvents(user.events);
    return callback(null, require(filePath));
  });
};

/**
 * @param  {Function} callback
 */
const getAllUsers = (callback) => {
  fs.readdir(USERS_PATH, (err, files) => {
    log.info(`Loading users from ${USERS_PATH}`, files);
    if (err) return callback(err);
    const users = (
      files
      .filter(file => file !== '.DS_Store')
      .map(file => path.join(USERS_PATH, file))
      // .each(filename => console.log('Loading filename', filename))
      // TODO: this is bad!
      .filter(filename => fs.statSync(filename).isFile())
      .map(filename => require(filename))
      .sort((a, b) => {
        const nameA = a.profile.last.toUpperCase();
        const nameB = b.profile.last.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      }));
    return callback(null, users);
  });
};

const UserDefaults = {
  profile: {
    username: null,
    email: null,
    first: null,
    last: null,
    twitter: null,
    phoneNumber: null,
    city: null,
    state: null,
    photo: null,
  },
  events: [],
};

/**
 * @param  {Object}   user
 * @param  {Function} callback
 */
const saveUser = (user, callback) => {
  const preppedUser = _.defaultsDeep(user, UserDefaults);
  const username = preppedUser.profile.username;
  log.info('Saving user', preppedUser);
  if (!username) {
    return callback(new Error('Missing required parameter username'));
  }

  try {
    return fs.writeFile(
      userFilename(username), JSON.stringify(preppedUser, null, '\t'), callback);
  } catch (jsonErr) {
    return callback(jsonErr);
  }
};

/**
 * @param  {Object}   options
 * @param  {string}   options.username
 * @param  {Object}   options.event
 * @param  {Function} callback [description]
 */
const addUserEvent = (options, callback) =>
  getUser(options.username, (err, user) => {
    log.info(`Saving new event for '${options.username}'`, options.event);
    if (err) return callback(err);
    if (options.event) {
      user.events.push(options.event);
      return saveUser(user, callback);
    }
    return callback(new Error('Missing required parameter event'));
  });

module.exports = {
  getUser, getAllUsers, saveUser, addUserEvent,
};
