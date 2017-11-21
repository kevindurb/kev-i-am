const sessionStore = require('./store');
const utils = require('./utils');

module.exports = {
  async getTokenData(token) {
    const result = await sessionStore.get(token);
    if (!result) return null;
    return JSON.parse(result);
  },
  async createNewTokens(userId) {
    const tokens = utils.createTokenData(userId);

    await Promise.all([
      sessionStore.set(
        tokens.access.accessToken,
        JSON.stringify(tokens.access),
        'EX',
        tokens.access.expires
      ),
      sessionStore.set(
        tokens.refresh.refreshToken,
        JSON.stringify(tokens.refresh),
        'EX',
        tokens.refresh.expires
      ),
    ]);

    return tokens.access;
  },
  deleteToken(token) {
    sessionStore.del(token);
  },
};
