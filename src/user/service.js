const User = require('./model');

exports.count = () => {
  return User
    .find({})
    .countDocuments();
};

exports.create = payload => {
  const user = new User(payload);
  return user.save();
};

exports.list = (params = {}, filter, fields = []) => {
  const $limit = parseInt(params.limit || filter.limit || 25, 10)
  const $skip = parseInt(params.skip || filter.skip || 0, 10)
  let sortBy = params.sortBy || filter.sortBy || null
  const order = parseInt(filter.order, 10)

  let sortObject = { _id: 1 }
  if (sortBy) {
    if (sortBy === 'id') {
      sortBy = '_id'
    } else {
      delete sortObject._id
    }
    sortObject[sortBy] = order
  }

  return User
    .find()
    .sort(sortObject)
    .limit(parseInt($limit, 10))
    .skip(parseInt($skip, 10))
}

exports.show = params => {
  if (params.id) {
    return User.findById(params.id);
  }
  return User.findOne(params);
};

exports.destroy = id => {
  return User.findByIdAndRemove(id);
};

exports.update = (id, payload) => {
  return User.updateOne({ _id: id }, { $set: payload });
};
