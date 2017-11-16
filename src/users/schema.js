const mongoose = require('../db');

module.exports = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  hash: { type: String, required: true },
});
