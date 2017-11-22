const UserModel = require('./model');
const passwordService = require('./passwordService');
const verifiedServices = require('../verified/services');
const emailServices = require('../email/services');
const R = require('ramda');

const cleanAndAddHash = (hash) => (
  R.pipe(
    R.omit([
      'password',
      'hash',
      'verified',
      'role',
    ]),
    R.merge({ hash })
  )
);

module.exports = {
  async create(data) {
    const hash = await passwordService.hash(data.password);
    const user = new UserModel(cleanAndAddHash(hash)(data));
    await user.save();
    const token = await verifiedServices.createUserVerification(user.id);
    await emailServices.sendUserVerification(token, user);
    return user;
  },
  getById(id) {
    return UserModel.findOne({ _id: id }).exec();
  },
  getByEmail(email) {
    return UserModel.findOne({ email }).exec();
  }
};
