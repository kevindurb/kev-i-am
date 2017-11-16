const AppModel = require('./model');

module.exports = {
  getById(id) {
    return AppModel.findOne({ _id: id}).exec();
  },
};
