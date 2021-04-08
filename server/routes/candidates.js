const express = require('express');
const router = express.Router();
const app = express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const jwt = require('jsonwebtoken');
const mongoURI = 'mongodb://159.69.120.82:27017/zimConnect';
app.use(express.json({limit: '100mb'}));
app.use(express.urlencoded({limit: '100mb', extended: true, parameterLimit:100000}));



router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request);
  Object.setPrototypeOf(res, app.response);
  req.res = res;
  res.req = req;
  next();
});

(async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
  } catch (error) {
    console.error(error);
  }
})();

router.get('/', (req, res) => {
  candidates.find({}, function(error, candidates) {
    return res.status(200).json(candidates);
 });
});


var candidates = new Schema({
  firstname: String
});

export default {
  path: '/candidates',
  handler: router
}