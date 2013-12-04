mongoose = require('mongoose');
Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;


function validatePresenceOf(value) {
  return value && value.length;
}

var Unit = new Schema({
  name : { type: String, validate: [validatePresenceOf, 'a task is required'] },
  avatar : { type: String },
  description : { type: String },
  created_at : Date,
  updated_at : Date
});
var Unit = mongoose.model('Unit', Unit);
module.exports = mongoose.model('Unit', Unit);