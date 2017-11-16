const mongoose = require('../db');

module.exports = new mongoose.Schema({
  name: String,
  email: String,
});
