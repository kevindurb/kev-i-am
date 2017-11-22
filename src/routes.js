const express = require('express');
const router = new express.Router();

router.use('/apps', require('./apps'));
router.use('/users', require('./users'));
router.use('/session', require('./session'));
router.use('/verified', require('./verified'));

module.exports = router;
