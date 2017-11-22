const mongoose = require('../db');

module.exports = mongoose.model('Verification', require('./schema'));
