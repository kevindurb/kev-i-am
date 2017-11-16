const mongoose = require('../db');
module.exports = mongoose.model('User', require('./schema'));
