const mongoose = require('../db');
module.exports = mongoose.model('App', require('./schema'));
