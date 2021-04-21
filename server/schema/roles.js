const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let roles = new Schema({
  name: String,
});

let Roles = mongoose.model('Roles',roles);
module.exports = Roles;