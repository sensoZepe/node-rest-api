const service = require('./service');
const User = require('./model');

module.exports = async function show (req, res) {
  const { query, params } = req;
  try {
    const user = await service.show(Object.assign({}, query, params));
    return res
      .status(200)
      .json({ user: new User(user).toObject({ virtuals: true }) });
  } catch (err) {
    return res
      .status(err.status)
      .json(err.message);
  }
};
