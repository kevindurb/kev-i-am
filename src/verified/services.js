const Verification = require('./model');

module.exports = {
  getById(id) {
    return Verification.findOne({ _id: id }).exec();
  },
  async createUserVerification(userId) {
    const verification = new Verification({
      type: 'user',
      metaId: userId,
    });
    await verification.save();

    return verification.id;
  },
};
