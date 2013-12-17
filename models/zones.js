mongoose = require('mongoose');
Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;


function validatePresenceOf(value) {
  return value && value.length;
}

var Zones = new Schema({
  name : { type: String, validate: [validatePresenceOf, 'a zone is required'] },
  avatar : { type: String },
  description : { type: String },
  size : { x: Number, y: Number },
  created_at : Date,
  updated_at : Date
});
var Zones = mongoose.model('Zones', Zones);
module.exports = mongoose.model('Zones', Zones);