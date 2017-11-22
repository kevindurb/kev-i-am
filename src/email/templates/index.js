const ejs = require('ejs');

const options = {
};

const renderFile = (fileName, data) => (
  new Promise((resolve, reject) => {
    ejs.renderFile(fileName, data, options, (err, str) => {
      if (err) {
        return reject(err);
      }
      return resolve(str);
    });
  })
);

module.exports = {
  buildActionEmail(data) {
    return renderFile(`${__dirname}/action.ejs`, data);
  }
};
