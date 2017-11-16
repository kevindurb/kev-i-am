const UsersModel = require('./model');
const userPresenter = require('./presenter');

module.exports = {
  getById(req, res) {
    const id = req.params.id;

    UsersModel.findOne({ _id: req.params.id}).exec()
      .then(user => (
        res.send(userPresenter(user))
      ))
      .catch(() => (
        res.status(404).end()
      ));
  },
};

