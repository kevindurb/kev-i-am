const uuidv4 = require('uuid/v4');

const ACCESS_DURATION = process.env.ACCESS_DURATION;
const REFRESH_DURATION = process.env.REFRESH_DURATION;

module.exports = {
  createTokenData(userId) {
    const access = uuidv4();
    const refresh = uuidv4();

    return {
      access: {
        type: 'access',
        expires: ACCESS_DURATION,
        refreshToken: refresh,
        accessToken: access,
        userId,
      },
      refresh: {
        type: 'refresh',
        expires: REFRESH_DURATION,
        refreshToken: refresh,
        accessToken: access,
        userId,
      },
    };
  }
};
