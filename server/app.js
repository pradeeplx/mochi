'use strict';

const path = require('path');
require('app-module-path').addPath(path.join(__dirname, '..'));

const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const config = require('config');
const log = require('server/loggers');

log.info('Starting Mochi server');
const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', express.static(config.PUBLIC_PATH));
app.use('/profile', express.static(path.join(__dirname, 'db', 'users', 'images')));
app.use('/', require('server/routes/dashboard'));
app.use('/', require('server/routes'));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err,
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {},
  });
});

app.listen(config.LISTEN_PORT, config.LISTEN_HOST, () => {
  log.info(`listening on ${config.LISTEN_HOST}:${config.LISTEN_PORT}`);
});

module.exports = app;
