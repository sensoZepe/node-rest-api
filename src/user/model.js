const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema(
  {
    name: {
      type: String,
      trim: true
    },
    number: {
      type: Number,
      trim: true
    },
  },
  {
    collection: 'users',
    versionKey: 'v',
    toObject: {
      transform: function (doc, ret) {
        ret.id = ret.id || ret._id;
        delete ret._id;
      }
    },
    timestamps: true
  }
);

schema.virtual('id').get(function () {
  return this._id;
});

module.exports = mongoose.model('User', schema);
