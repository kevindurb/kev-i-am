const express = require('express');
const router = new express.Router();

const transactions = require('./transactions');

router.get('/:id', transactions.getById);
router.get('/:id/role', transactions.getRole);
router.put('/:id/role', transactions.setRole);

module.exports = router;
