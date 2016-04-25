'use strict';

const express = require('express');
const router = express.Router();
const log = require('server/loggers');
const db = require('server/db');

router.get('/:username', (req, res) =>
  db.getUser(req.params.username, (err, user) => {
    if (err) {
      log.error(err);
      return res.status(400).json({});
    }
    return res.json(user);
  })
);

router.get('/', (req, res) =>
  db.getAllUsers((err, users) => {
    if (err) {
      return res.status(400).json({});
    }
    return res.json(users);
  })
);

module.exports = router;
