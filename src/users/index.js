const express = require('express');
const router = new express.Router();

const transactions = require('./transactions');

router.get('/:id', transactions.getById);

module.exports = router;
