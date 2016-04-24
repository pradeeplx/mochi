'use strict';

const path = require('path');
const express = require('express');
const router = express.Router();
const config = require('config');
const log = require('server/loggers');

const indexHtml = path.join(config.PUBLIC_PATH, 'index.html');
router.get('*', (req, res) => {
  log.info('Catchall request');
  res.sendFile(indexHtml);
});

module.exports = router;
