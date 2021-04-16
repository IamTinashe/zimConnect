const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let users = new Schema({
  firstname: String,
  lastname: String,
  email: String,
});

let Users = mongoose.model('Users', users);
module.exports = Users;