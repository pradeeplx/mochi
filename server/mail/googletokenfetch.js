#!/usr/bin/env node

'use strict';

const path = require('path');
require('app-module-path').addPath(path.join(__dirname, '..', '..'));

const fs = require('fs');
const readline = require('readline');
const google = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const log = require('server/loggers');
const secret = require('server/.secrets/google_client_secret');

const cli = require('commander');

// If modifying these scopes, delete your previously saved credentials
const SCOPES = ['https://www.googleapis.com/auth/gmail.compose'];
const TOKEN_DIR = path.join(__dirname, '../.secrets');
const TOKEN_PATH = path.join(TOKEN_DIR, 'mochigiving_token.json');

/**
 * Store token to disk be used in later program executions.
 *
 * @param {Object} token The token to store to disk.
 */
const storeToken = (token, callback) => {
  const cb = callback || (() => {});
  try {
    fs.mkdirSync(TOKEN_DIR);
  } catch (err) {
    if (err.code !== 'EEXIST') {
      throw err;
    }
  }
  fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
    if (err) return cb(err);
    return log.info(`Token stored to ${TOKEN_PATH}`);
  });
};

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 *
 * @param {google.auth.OAuth2} oauth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback to call with the authorized
 *     client.
 */
const getNewToken = (oauth2Client, callback) => {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  log.info('Authorize this app by visiting this url: ', authUrl);

  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oauth2Client.getToken(code, (err, token) => {
      if (err) {
        log.error('Error while trying to retrieve access token', err);
        return callback(err);
      }
      log.info('Retrived new access token', token);
      storeToken(token);
      return callback(null, oauth2Client);
    });
  });
};

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 *
 * @param {Object} credentials The authorization client credentials.
 * @param {Object} options [description]
 * @param {function} callback The callback to call with the authorized client.
 */
const authorize = (credentials, callback) => {
  const clientSecret = credentials.web.client_secret;
  const clientId = credentials.web.client_id;
  const redirectUrl = credentials.web.redirect_uris[0];
  const oauth2Client = new OAuth2(clientId, clientSecret, redirectUrl);

  // Check if we have previously stored a token.
  fs.stat(TOKEN_PATH, (err, stats) => {
    if (err) {
      getNewToken(oauth2Client, callback);
    } else if (stats.isFile()) {
      log.info(`Loading existing token from ${TOKEN_PATH}`);
      oauth2Client.setCredentials(require(TOKEN_PATH));
      callback(null, oauth2Client);
    } else {
      callback(new Error(`Failed to load token ${TOKEN_PATH}`));
    }
  });
};

cli
  .version('0.1.0')
  .command('fetch')
  .description('fetch Fetch a new Google OAuth2 access token')
  .action(() =>
    authorize(secret, (err) => {
      if (err) return log.error(err);
      return null;
    }));

cli.parse(process.argv);

module.exports = {
  storeToken, getNewToken, TOKEN_PATH,
};

