const UserModel = require('./model');
const passwordService = require('./passwordService');
const R = require('ramda');

const replacePasswordWithHash = (hash) => (
  R.pipe(
    R.omit(['password', 'hash']),
    R.merge({ hash })
  )
);

module.exports = {
  async create(data) {
    const hash = await passwordService.hash(data.password);
    const user = new UserModel(replacePasswordWithHash(hash)(data));
    return user.save();
  },
  getById(id) {
    return UserModel.findOne({ _id: id}).exec();
  }
};
