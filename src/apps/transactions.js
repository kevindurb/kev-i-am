const AppModel = require('./model');
const appPresenter = require('./presenter');
const appServices = require('./services');
const userServices = require('../users/services');
const userPresenter = require('../users/presenter');

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
  async createUser(req, res) {
    try {
      const app = await appServices.getById(req.params.id);
      const user = await userServices.create(req.body);
      if (!app.users) {
        app.users = [];
      }
      app.users.push(user);
      await app.save()
      res.status(201).send(userPresenter(user));
    } catch(err) {
      res.status(400).end();
    }
  }
};
