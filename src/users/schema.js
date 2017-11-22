const mongoose = require('../db');

module.exports = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  hash: { type: String, required: true },
  verified: { type: Boolean, default: false },
  role: { type: String, default: 'basic' },
});
