const mongoose = require('../db');
const UserSchema = require('../users/schema');

module.exports = new mongoose.Schema({
  name: { type: String, required: true },
  users: { type: [UserSchema] , default: [] },
});
