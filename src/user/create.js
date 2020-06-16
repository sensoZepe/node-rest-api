const service = require('./service');
const User = require('./model');

module.exports = async function create (req, res) {
  try {
    const user = await service.create(req.body);
    return res
      .status(201)
      .json({ user: new User(user).toObject({ virtuals: true }) });
  } catch (err) {
    console.log(err);
    return res
      .status(err.status)
      .json(err.message);
  }
};
