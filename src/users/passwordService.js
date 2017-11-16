const bcrypt = require('bcrypt');

module.exports = {
  hash(password) {
    return bcrypt.hash(password, 10);
  },
  compare(hashA, hashB) {
    return bcrypt.compare(hashA, hashB);
  }
};
