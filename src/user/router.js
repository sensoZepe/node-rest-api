const express = require('express');
const actions = require('./actions');

const router = express.Router();

router.get('/', actions.list)
  .post('/', actions.create)
  .get('/:id', actions.show)
  .patch('/:id', actions.update)
  .delete('/:id', actions.destroy);

module.exports = router;
