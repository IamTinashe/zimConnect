const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let companies = new Schema({
  name: String,
  jobIDProfiles: Array
});

let Companies = mongoose.model('Companies', companies);
module.exports = Companies;