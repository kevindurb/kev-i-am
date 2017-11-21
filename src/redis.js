const redis = require('redis');

module.exports = () => {
  if (global.redisConnection) {
    return global.redisConnection;
  }

  global.redisConnection = redis.createClient(process.env.REDIS_URL);

  return global.redisConnection;
};
