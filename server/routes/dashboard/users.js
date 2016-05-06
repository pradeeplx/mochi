'use strict';

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const log = require('server/loggers');
const db = require('server/db');

const jsonParser = bodyParser.json();

router.get('/:username', (req, res) =>
  db.getUser(req.params.username, (err, user) => {
    if (err) {
      log.error(err);
      return res.status(400).json({});
    }
    return res.json(user);
  })
);

router.post('/:username/events', jsonParser, (req, res, next) => {
  const username = req.params.username;
  const event = req.body;
  log.info('Request body', req.body);
  return db.addUserEvent({ username, event }, (err) => {
    if (err) {
      return next(err);
    }
    return res.json({});
  });
});

router.get('/', (req, res) =>
  db.getAllUsers((err, users) => {
    if (err) {
      return res.status(400).json({});
    }
    return res.json(users);
  })
);

module.exports = router;
