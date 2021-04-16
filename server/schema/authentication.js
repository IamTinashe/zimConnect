const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let authentication = new Schema({
  email: String,
  password: String
});

let Authentication = mongoose.model('Authentication', authentication);
module.exports = Authentication;