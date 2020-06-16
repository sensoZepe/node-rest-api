const service = require('./service');

module.exports = async function destroy (req, res) {
  try {
    const { params } = req;
    await service.destroy(params.id);
    return res
      .status(204)
      .json({});
  } catch (err) {
    return res
      .status(err.status)
      .json(err.message);
  }
};
