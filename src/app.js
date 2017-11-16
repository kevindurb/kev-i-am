const express = require('express');
// const routes = require('./routes');
const debug = require('debug')('kev-i-am:app');
const helmet = require('helmet');
const app = express();

app.use(helmet());
app.use(require('cors')());

app.use(require('body-parser').json());
// app.use(routes);

app.get('/', (req, res) => {
  debug('status:OK');
  res.send('OK');
});

app.all('*', function(req, res){
  debug('404');
  res.status(404);
  res.end();
});

module.exports = app;
