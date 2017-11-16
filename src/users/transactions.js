const userPresenter = require('./presenter');
const appServices = require('./services');
const userServices = require('../users/services');

module.exports = {
  getById(req, res) {
    const id = req.params.id;

    userServices.getById(id)
      .then(userPresenter)
      .then(user => (
        res.send(user)
      ))
      .catch(() => (
        res.status(404).end()
      ));
  },
  async create(req, res) {
    try {
      const app = await appServices.getById(req.params.id);
      const user = await userServices.create(req.body);
      if (!app.users) {
        app.users = [];
      }
      app.users.push(user);
      await app.save();
      res.status(201).send(userPresenter(user));
    } catch(err) {
      res.status(400).end();
    }
  }
};

