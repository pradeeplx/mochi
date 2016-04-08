'use strict';

const path = require('path');
const express = require('express');
const router = express.Router();
const config = require('../config');

router.get('*', (req, res) => {
  const fileName = path.join(config.PUBLIC_PATH, 'index.html');
  console.log('catchall request', req.url, fileName);
  res.sendFile(fileName);
});


module.exports = router;



















