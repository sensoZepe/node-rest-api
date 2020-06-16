const service = require('./service');
const User = require('./model');

module.exports = async function list (req, res) {
  const { query, params } = req;
  try {
    const users = await service.list({}, query);
    return res
      .status(200)
      .json({ users: users.map(user => {
        return new User(user).toObject({ virtuals: true }) }),
        ...query.limit ? { totalCount : await service.count(query) } : {}
      })
  } catch (err) {
    return res
      .status(err.status)
      .json(err.message);
  }
};