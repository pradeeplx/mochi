'use strict';

const google = require('googleapis');
const googleauth = require('server/mail/googleauth');
const gmail = google.gmail('v1');
const log = require('server/loggers');
const compose = require('./compose');

/**
 * https://developers.google.com/gmail/api/v1/reference/users/messages/send#response
 *
 * @param {Object} options
 * @param {string|Array.<string>} options.to
 * @param {string|Array.<string>} options.cc
 * @param {string|Array.<string>} options.bcc
 * @param {string} options.subject
 * @param {string} options.message
 * @param {string} options.inReplyTo
 * @param {function} callback
 */
const send = (options, callback) =>
  compose(options, (err, base64EncodedEmail) => {
    if (err) return callback(err);

    log.info('Base64 encoded email', base64EncodedEmail);
    return gmail.users.messages.send({
      userId: 'mochigiving@gmail.com',  // Special value 'me' indicates the authenticated user
      resource: { raw: base64EncodedEmail },
      auth: googleauth.client,
    }, callback);
  });

const messages = () => {
  throw new Error('Not implemented');
};

module.exports = {
  send, messages,
};
