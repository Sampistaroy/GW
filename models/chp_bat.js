var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId
  , Grille = require('../models/grille');

function validatePresenceOf(value) {
  return value && value.length;
}

var Chp_bat = new Schema({
  name : { type: String, validate: [validatePresenceOf, 'a chp_bat is required'] },
  avatar : { type: String },
  description : { type: String },
  grille : [Grille._id],
  created_at : Date,
  updated_at : Date
});
var Chp_bat = mongoose.model('Chp_bat', Chp_bat);
module.exports = mongoose.model('Chp_bat', Chp_bat);