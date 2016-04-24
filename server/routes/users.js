const path = require('path');
const express = require('express');
const router = express.Router();
const fs = require('fs');
const log = require('server/loggers');

router.get('/:username', (req, res) => {
  const username = req.params.username || 'unknown';
  log.info(`Req for username ${username}`);
  // check if user file exists
  const filePath = path.join(__dirname, 'users', `${username}.json`);
  fs.stat(filePath, (err) => {
    if (err) {
      log.error('Username does not exist');
      return res.json({});
    }
    const user = require(filePath);
    return res.json(user);
  });
});

router.get('/', (req, res) => {
  const userPath = path.join(__dirname, 'users');

  fs.readdir(userPath, (err, files) => {
    if (err) return log.error(err);
    const result = files.map(file => require(path.join(userPath, file)));
    return res.json(result);
  });
});

module.exports = router;
