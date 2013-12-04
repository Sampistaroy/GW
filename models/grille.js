mongoose = require('mongoose');
Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;


function validatePresenceOf(value) {
  return value && value.length;
}

var Grille = new Schema({
  name : { type: String, validate: [validatePresenceOf, 'a grille is required'] },
  avatar : { type: String },
  description : { type: String },
  size : { x: Number, y: Number },
  created_at : Date,
  updated_at : Date
});
var Grille = mongoose.model('Grille', Grille);
module.exports = mongoose.model('Grille', Grille);