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

const loadToken = (tokenPath, callback) =>
  fs.readFile(tokenPath, 'utf8', (err, data) => {
    if (err) return callback(err);
    const token = JSON.parse(data);
    oauth2Client.setCredentials(token);
    return callback(null, token);
  });

const refreshToken = (client) => {
  log.info('Refreshing access token');

  return client.refreshAccessToken((refreshErr, token) => {
    if (refreshErr) {
      return log.error('Failed to refresh access token', refreshErr);
    }
    return tokenfetch.storeToken(token, (storeErr) => {
      if (storeErr) return log.error(storeErr);
      return loadToken(tokenfetch.TOKEN_PATH, (loadErr) => {
        if (loadErr) return log.error(loadErr);
        return log.info('Access token loaded');
      });
    });
  });
};

const handleTokenLoad = (err, token) => {
  if (err) {
    return log.error(`Failed to load access token ${tokenfetch.TOKEN_PATH}`);
  }

  log.info('Access token loaded');
  if (Date.now() > token.expiry_date) {
    log.info(`Access token expired as of ${new Date(token.expiry_date)}`);
    refreshToken(oauth2Client);
  }

  return null;
};

loadToken(tokenfetch.TOKEN_PATH, handleTokenLoad);

module.exports = {
  get client() {
    return oauth2Client;
  },
};
