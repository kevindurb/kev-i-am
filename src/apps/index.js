const express = require('express');
const router = new express.Router();

const appsTransactions = require('./transactions');

router.get('/:id', appsTransactions.getById);
router.post('/', appsTransactions.create);

module.exports = router;
