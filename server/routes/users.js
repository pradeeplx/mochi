const path = require('path');
const debug = require('debug')('users');
const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/:username', (req, res, next) => {
    const username = req.params.username || 'unknown';
    debug(`Req for username ${username}`);
      // check if file exists
      // if it does 
      const filePath = path.join(__dirname, 'users', `${username}.json`);
      fs.stat(filePath, (err, stats) => {
        if (err) {
            debug('Username does not exist')
            // username doesn't exist
            return res.json({});
        }
        const user = require(filePath);
        return res.json(user);
    });
});

router.get('/', (req, res) => {
  const userPath = path.join(__dirname, 'users');

  fs.readdir(userPath, (err, files) => {
    if (err) return console.error(err);
    const result = files.map(file => require(path.join(userPath, file)));
    res.json(result);
  });
});

router.get('/:username', (req, res, next) => {
    return res.json({ "username": req.params.username });
});

module.exports = router;
