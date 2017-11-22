const userServices = require('../users/services');
const passwordService = require('../users/passwordService');
const sessionPresenter = require('./presenter');
const sessionServices = require('./services');

module.exports = {
  async createSession(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    try {
      const user = await userServices.getByEmail(email);
      if (!user.verified) {
        res.status(400).end();
      } else if (await passwordService.compare(password, user.hash)) {
        const accessToken = await sessionServices.createNewTokens(user.id);
        res.status(201).send(sessionPresenter(accessToken));
      } else {
        res.status(400).end();
      }
    } catch (e) {
      res.status(400).end();
    }
  },
  async getSession(req, res) {
    const token = req.params.token;
    try {
      const data = await sessionServices.getTokenData(token);
      if (data && data.type === 'access') {
        res.send(sessionPresenter(data));
      } else {
        res.status(400).end();
      }
    } catch (e) {
      res.status(400).end();
    }
  },
  async refreshToken(req, res) {
    const token = req.params.token;
    const data = await sessionServices.getTokenData(token);
    if (data && data.type === 'refresh') {
      sessionServices.deleteToken(data.accessToken);
      sessionServices.deleteToken(data.refreshToken);
      const accessToken = await sessionServices.createNewTokens(data.userId);
      res.status(201).send(sessionPresenter(accessToken));
    } else {
      res.status(400).end();
    }
  },
};
