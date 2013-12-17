mongoose = require('mongoose');
Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;


function validatePresenceOf(value) {
  return value && value.length;
}

var Unites = new Schema({
  name : { type: String, validate: [validatePresenceOf, 'un nom est requis'] },
  avatar : { type: String },
  description : { type: String },
  created_at : Date,
  updated_at : Date
});
var Unites = mongoose.model('Unites', Unites);
module.exports = mongoose.model('Unites', Unites);