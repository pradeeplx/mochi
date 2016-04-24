'use strict';

/* eslint-disable no-console */

process.env.DEBUG = process.env.DEBUG || 'info,error';

const debug = require('debug');

// info/debug log to stdout
const info = debug('info');
const debugLog = debug('debug');
info.log = console.log.bind(console);
debug.log = console.log.bind(console);

// error logs to stderr
const error = debug('error');

module.exports = { info, debug: debugLog, error };
