const sendMail = require('./sendMail');
const templates = require('./templates');

module.exports = {
  async sendUserVerification(token, user) {
    const body = await templates.buildActionEmail({
      title: '',
      message: '',
      actionName: '',
      actionUrl: '',
    });

    await sendMail({
      from: 'kev-i-am <verification@iam.kevindurbin.com>',
      to: user.email,
      subject: '',
      text: body,
    });
  }
};
