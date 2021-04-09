var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var users = new Schema({
  firstname: String,
});

var Users = mongoose.model('Users', users);
module.exports = Users;