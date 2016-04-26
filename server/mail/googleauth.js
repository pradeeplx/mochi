'use strict';

const fs = require('fs');
const google = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const tokenfetch = require('./googletokenfetch');
const credentials = require('server/.secrets/google_client_secret.json');
const log = require('server/loggers');

// Setup the client
const clientSecret = credentials.web.client_secret;
const clientId = credentials.web.client_id;
const redirectUrl = credentials.web.redirect_uris[0];
const oauth2Client = new OAuth2(clientId, clientSecret, redirectUrl);
let tokenLoaded = false;

const loadToken = (tokenPath, callback) =>
  fs.readFile(tokenPath, 'utf8', (err, data) => {
    if (err) return callback(err);
    const token = JSON.parse(data);
    log.info('Loading token', token);
    oauth2Client.setCredentials(token);
    return callback(null, token);
  });

const refreshToken = (client, callback) => {
  log.info('Refreshing access token');

  return client.refreshAccessToken((refreshErr, token) => {
    if (refreshErr) {
      return log.error('Failed to refresh access token', refreshErr);
    }
    return tokenfetch.storeToken(token, (storeErr) => {
      if (storeErr) return callback(storeErr);
      return callback(null);
    });
  });
};

module.exports = {
  get client() {
    if (tokenLoaded) return oauth2Client;
    log.error('No token loaded');
    return null;
  },

  loadToken(callback) {
    loadToken(tokenfetch.TOKEN_PATH, (loadErr, token) => {
      if (loadErr) return callback(loadErr);

      if (Date.now() > token.expiry_date) {
        log.info(`Access token expired as of ${new Date(token.expiry_date)}`);
        return refreshToken(null, (refreshErr) => {
          if (refreshErr) return callback(refreshErr);
          return loadToken(tokenfetch.TOKEN_PATH, (secondLoadErr) => {
            if (secondLoadErr) return callback(secondLoadErr);
            tokenLoaded = true;
            log.info('Access token loaded');
            return callback(null, oauth2Client);
          });
        });
      }

      tokenLoaded = true;
      log.info('Access token loaded');
      return callback(null, oauth2Client);
    });
  },
};
