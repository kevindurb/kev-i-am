const mailgun = require('mailgun-js')({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});

module.exports = (data) => (
  new Promise((resolve, reject) => {
    mailgun.messages().send(data, (err, body) => {
      if (err) {
        return reject(err);
      }

      return resolve(body);
    });
  })
);
