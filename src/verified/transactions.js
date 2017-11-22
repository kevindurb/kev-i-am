const userServices = require('../users/services');
const verifiedServices = require('./services');

module.exports = {
  async verify(req, res) {
    const token = req.params.token;

    const verification = await verifiedServices.getById(token);

    if (verification) {
      if (verification.type === 'user') {
        const user = await userServices.getById(verification.metaId);
        user.verified = true;
        await user.save();
        res.status(200).end();
      }
    } else {
      res.status(400).end();
    }
  }
};
