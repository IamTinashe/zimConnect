const express = require('express');
const router = express.Router();
const app = express();
const mongoose = require('mongoose');
const Users = require('../schema/users');
const Roles = require('../schema/roles');
//const jwt = require('jsonwebtoken');
const mongoURI = 'mongodb://159.69.120.82:27017/zimconnect';
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

router.post('/', (req, res) => {
  let user = new Users({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email
  })
  user.save(function(error, response) {
    if (error) return res.status(500).json(error);
    else return res.status(201).json(response)
  })
});

router.post('/roles', (req, res) => {
  let roles = new Roles({
    name: req.body.role,
  })
  roles.save(function(error, response) {
    if (error) return res.status(500).json(error);
    else return res.status(201).json(response)
  })
});

router.get('/', function(req, res) {
  Users.find({}, function(error, users) {
    if (error) return res.status(500).json(error);
    else return res.status(200).json(users);
  });
});


export default {
  path: '/users',
  handler: router
}