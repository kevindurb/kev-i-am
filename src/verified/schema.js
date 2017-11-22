const mongoose = require('../db');

module.exports = new mongoose.Schema({
  type: String,
  metaId: String,
});
