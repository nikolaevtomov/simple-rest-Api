const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const swSchema = new Schema({
  username: String,
  todo: String,
  isDone: Boolean,
  hasAttachment: Boolean
});

const StarWarsModel = mongoose.model('starwars', swSchema);

module.exports = StarWarsModel;
