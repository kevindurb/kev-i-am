const AppModel = require('./model');
const appPresenter = require('./presenter');

module.exports = {
  getById(req, res) {
    const id = req.params.id;

    AppModel.findOne({ _id: id}).exec()
      .then(app => (
        res.send(appPresenter(app))
      ))
      .catch(() => (
        res.status(404).end()
      ));
  },
  create(req, res) {
    const data = req.body;
    const newApp = new AppModel(data);

    newApp.save().then(app => (
      res.status(201).send(appPresenter(app))
    ));
  }
};
