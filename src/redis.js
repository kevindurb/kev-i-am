const redis = require('redis');

module.exports = () => {
  if (global.redisConnection) {
    return global.redisConnection;
  }

  global.redisConnection = redis.createClient(process.env.REDIS_URL);

  global.redisConnection.on('error', function (err) {
    console.log('Error ' + err);
  });

  global.redisConnection.on('connect', function () {
    console.log('Connected to Redis!');
  });

  global.redisConnection.on('ready', function () {
    console.log('Ready to Redis!');
  });

  return global.redisConnection;
};
