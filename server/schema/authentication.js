const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let authentication = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: true
  }
});

let Authentication = mongoose.model('Authentication', authentication);
module.exports = Authentication;