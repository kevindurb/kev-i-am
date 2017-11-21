const userPresenter = require('./presenter');
const appServices = require('../apps/services');
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
      console.log(req.params.id);
      const app = await appServices.getById(req.params.id);
      if (!app) {
        throw 'APP_NOT_FOUND';
      }
      const user = await userServices.create(req.body);
      if (!app.users) {
        app.users = [];
      }
      app.users.push(user);
      await app.save();
      res.status(201).send(userPresenter(user));
    } catch(err) {
      if (err === 'APP_NOT_FOUND') {
        res.status(404).send().end();
      } else {
        res.status(400).send().end();
      }
    }
  }
};

