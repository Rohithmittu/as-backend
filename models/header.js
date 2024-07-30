const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HeaderSchema = new Schema({
  text: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Header', HeaderSchema);
