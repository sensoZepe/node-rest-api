const express = require('express');
const router = express.Router();
const user = require('./src/user');

router.get('/', async (req, res) => res.send('API running'));

router.use('/users', user.router);

module.exports = router;
