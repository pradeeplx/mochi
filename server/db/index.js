'use strict';

const path = require('path');
const fs = require('fs');
const _ = require('lodash');
const log = require('server/loggers');

const USERS_PATH = path.join(__dirname, 'users');

const userFilename = (username) => path.join(USERS_PATH, `${username}.json`);

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
    return callback(null, require(filePath));
  });
};

/**
 * @param  {Function} callback
 */
const getAllUsers = (callback) => {
  fs.readdir(USERS_PATH, (err, files) => {
    log.info(`Loading users from ${USERS_PATH}`);
    if (err) return callback(err);
    const users = (
      files
      .map(file => path.join(USERS_PATH, file))
      // TODO: this is bad!
      .filter(filename => fs.statSync(filename).isFile())
      .map(filename => require(filename)));
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
