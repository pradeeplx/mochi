'use strict';

const path = require('path');
const express = require('express');
const debug = require('debug')('mochi:server');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const config = require('./config');

const routes = require('./routes/index');
const users = require('./routes/users');

debug('booting Mochi');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(config.PUBLIC_PATH));
app.use('/', express.static(config.PUBLIC_PATH));

app.use('/users', users);
app.use('/', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

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
  debug(`listening on ${config.LISTEN_HOST}:${config.LISTEN_HOST}`);
});

module.exports = app;
