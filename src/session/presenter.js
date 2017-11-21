module.exports = (data) => ({
  accessToken: data.accessToken,
  refreshToken: data.refreshToken,
  userId: data.userId,
  expiresIn: data.expires,
});
