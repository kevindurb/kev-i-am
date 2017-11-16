const AppModel = require('./model');
const appPresenter = require('./presenter');
const appServices = require('./services');

module.exports = {
  getById(req, res) {
    const id = req.params.id;

    appServices.getById(id)
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
  },
};
