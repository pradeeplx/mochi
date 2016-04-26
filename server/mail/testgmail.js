'use strict';

const path = require('path');
require('app-module-path').addPath(path.join(__dirname, '..', '..'));

const mail = require('server/mail');
const googleauth = require('server/mail/googleauth');
const log = require('server/loggers');

const message = {
  to: 'Sean Herman <sjh293@cornell.edu>',
  cc: 'Sean Herman <seanherman@gmail.com>',
  subject: 'YOLO',
  message: 'Hey there buddy',
};

googleauth.loadToken(() =>
  mail.send(message, (err, res) => {
    if (err) return log.error(err);
    return log.info('Sucessfully sent message', res);
  })
);
