const express = require('express');
const router = express.Router();
const app = express();
const mongoose = require('mongoose');
const Roles = require('../schema/roles');
const jwt = require('jsonwebtoken');
const mongoURI = 'mongodb://admin:zimconnect@159.69.120.82:27017/zimconnect';
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

router.post('/add', (req, res) => {
  let roles = new Roles({
    name: req.body.name,
  })
  roles.save(function(error, response) {
    if (error) return res.status(500).json(error);
    else return res.status(201).json(response)
  })
});

router.get('/', function(req, res) {
  Roles.find({}, function(error, roles) {
    if (error) return res.status(500).json(error);
    else return res.status(200).json(roles);
  });
});




export default {
  path: '/roles',
  handler: router
}