'use strict';

const path = require('path');
const fs = require('fs');
const log = require('server/loggers');

const USERS_PATH = path.join(__dirname, 'users');

/**
 * @param  {string}   username
 * @param  {Function} callback
 */
const getUser = (username, callback) => {
  log.info(`Loading username "${username}"`);
  const filePath = path.join(USERS_PATH, `${username}.json`);

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
    if (err) return callback(err);
    const users = (
      files
      .map(file => path.join(USERS_PATH, file))
      .map(filename => require(filename)));
    return callback(null, users);
  });
};

module.exports = {
  getUser, getAllUsers,
};
