const redis = require('../redis')();

module.exports = {
  get(key) {
    return (new Promise((res, rej) => {
      redis.get(key, (err, value) => {
        if (err) {
          rej(err);
        }
        res(value);
      });
    }));
  },
  set(key, value, command = '', param = '') {
    return (new Promise((res, rej) => {
      redis.set(key, value, command, param, (err, result) => {
        if (err || result !== 'OK') {
          rej(err);
        }
        res();
      });
    }));
  },
  del(key) {
    redis.del(key);
  }
};
