const UserModel = require('./model');

module.exports = {
  create(data) {
    return (new UserModel(data)).save();
  },
};
