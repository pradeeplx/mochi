'use strict';

const express = require('express');
const router = express.Router();
const UserRoutes = require('server/routes/dashboard/users');

router.use('/users', UserRoutes);

module.exports = router;
