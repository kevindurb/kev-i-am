const express = require('express');
const router = new express.Router();

router.use('/apps', require('./apps'));
router.use('/users', require('./users'));

module.exports = router;
