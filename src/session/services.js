const sessionStore = require('../redis')();
const utils = require('./utils');

module.exports = {
  async getTokenData(token) {
    const result = await (new Promise((res, rej) => {
      sessionStore.get(token, (err, value) => {
        if (err) {
          rej(err);
        }
        res(value);
      });
    }));
    if (!result) return null;
    return JSON.parse(result);
  },
  createNewTokens(userId) {
    const tokens = utils.createTokenData(userId);

    sessionStore.set(
      tokens.access.accessToken,
      JSON.stringify(tokens.access),
      'EX',
      tokens.access.expires
    );
    sessionStore.set(
      tokens.refresh.refreshToken,
      JSON.stringify(tokens.refresh),
      'EX',
      tokens.refresh.expires
    );

    return tokens.access;
  }
};
