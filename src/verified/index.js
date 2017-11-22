const express = require('express');
const router = new express.Router();

const transactions = require('./transactions');

router.get('/:token', transactions.verify);

module.exports = router;
