const express = require('express');
const router = new express.Router();

const appsTransactions = require('./transactions');
const usersTransactions = require('../users/transactions');

router.get('/:id', appsTransactions.getById);
router.post('/', appsTransactions.create);
router.post('/:id/users', usersTransactions.create);

module.exports = router;
