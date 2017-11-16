const express = require('express');
const router = new express.Router();

router.use('/apps', require('./apps'));

module.exports = router;
