'use strict';

// https://github.com/emailjs/emailjs-mime-builder
const MimeBuilder = require('mailbuild');
const uuid = require('node-uuid');
const log = require('server/loggers');

/*
 * base64.js: An extremely simple implementation of base64 encoding / decoding
 * using node.js Buffers
 *
 * (C) 2010, Nodejitsu Inc.
 * (C) 2011, Cull TV, Inc.
 *
 */

const base64 = {
  encode(unencoded) {
    return new Buffer(unencoded || '').toString('base64');
  },

  decode(encoded) {
    return new Buffer(encoded || '', 'base64').toString('utf8');
  },

  urlEncode(unencoded) {
    const encoded = base64.encode(unencoded);
    return encoded.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  },

  urlDecode(encoded) {
    let raw = encoded.replace(/-/g, '+').replace(/_/g, '/');
    while (raw.length % 4) {
      raw += '=';
    }
    return base64.decode(raw);
  },
};

const MESSAGE_FROM = 'Mochi <mochigiving@gmail.com>';

const MessageDefaults = {
  from: MESSAGE_FROM,
};

const buildHeader = (options) => {
  const result = Object.assign({}, MessageDefaults, {
    'message-id': `${uuid.v1()}@gmail`,
  });
  if (options.cc) {
    result.cc = options.cc;
  }
  if (options.bcc) {
    result.bcc = options.bcc;
  }
  if (options.subject) {
    result.subject = options.subject;
  }
  if (options.inReplyTo) {
    result['in-reply-to'] = options.inReplyTo;
  }
  return result;
};

/**
 * https://tools.ietf.org/html/rfc5322
 *
 * @param {Object} options
 * @param {string|Array.<string>} options.to
 * @param {string|Array.<string>} options.cc
 * @param {string|Array.<string>} options.bcc
 * @param {string} options.subject
 * @param {string} options.message
 * @param {string} options.inReplyTo
 * @param {Function} callback
 */
const compose = (options, callback) =>
  (() => {
    const header = (
      new MimeBuilder('text/plain')
      .addHeader(buildHeader(options))
    );

    const message = header.setContent(options.message || '');
    const composed = message.build();

    log.info('Composed new email message', composed);
    callback(null, base64.urlEncode(composed));
  })();

module.exports = compose;
