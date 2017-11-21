const express = require('express');
const router = new express.Router();

const transactions = require('./transactions');

router.post('/', transactions.createSession);
router.get('/:token', transactions.getSession);
router.post('/:token', transactions.refreshToken);

module.exports = router;
