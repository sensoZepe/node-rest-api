require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const router = require('./router');
const db = require('./db');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', router);

if (!module.parent) {
  db.connect()
    .then(() => {
      console.info('Connected to DB');
    })
    .catch(err => {
      console.error('Failed to connect to DB');
      console.error(err.message);
      process.exit(1);
    });

  app.listen(PORT, () => console.info(`Listening on ${PORT}`));
}

module.exports = app;
