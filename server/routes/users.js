const path = require('path');
const express = require('express');
const router = express.Router();
const fs = require('fs');

/* GET users listing. */
router.get('/', (req, res, next) => {
  return res.send('respond with a resource');
});
router.get('/:username', (req, res, next) => {
    const username = req.params.username || 'unknown';
    console.log(`Req for username ${username}`);
      // check if file exists
      // if it does 
      const filePath = path.join(__dirname, 'users', `${username}.json`);
      fs.stat(filePath, (err, stats) => {
        if (err) {
            console.log('Username does not exist')
            // username doesn't exist
            return res.json({});
        }
        const user = require(filePath);
        console.log('Username exists', user);
          return res.json(user);
    });
});

router.get('/:username', (req, res, next) => {
    return res.json({ "username": req.params.username });
});

module.exports = router;
