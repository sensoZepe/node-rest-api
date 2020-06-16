const service = require('./service');
const Program = require('./model');

module.exports = async function update (req, res) {
  const { params } = req;
  try {
    const user = await service.update(params.id, req.body);
    return res
      .status(200)
      .json({ user: new User(user).toObject({ virtuals: true }) });
  } catch (err) {
    return res
      .status(err.status)
      .json(err.message);
  }
};
