const userPresenter = require('./presenter');
const appServices = require('../apps/services');
const userServices = require('../users/services');

const ROOT_TOKEN = process.env.ROOT_TOKEN;

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
  },
  async getRole(req, res) {
    const id = req.params.id;
    const token = req.query.token;

    if (token !== ROOT_TOKEN) {
      res.status(403).end();
      return;
    }

    const user = await userServices.getById(id);
    if (user) {
      res.send({ role: user.role });
    } else {
      res.status(404).end();
    }
  },
  async setRole(req, res) {
    const id = req.params.id;
    const token = req.query.token;
    const role = req.body.role;

    if (token !== ROOT_TOKEN) {
      res.status(403).end();
      return;
    }

    const user = await userServices.getById(id);
    if (user) {
      user.role = role;
      await user.save();
      res.send({ role: user.role });
    } else {
      res.status(404).end();
    }
  },
};

