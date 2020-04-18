var express = require('express');
var api = express.Router();
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var user_controller = require('../controller/user_controller');

// GET All Users
api.get('/users/all', async function(req, res, next) { console.log("hahahahaha: " + req.header('Authorization')); return res.json( await user_controller.getUsers_All());});

//POST Create User
api.post('/users/create', async function(req, res, next) {return res.json( await user_controller.createUser(req.body));});

// GET User by ID
api.get('/users/:user_id', async function(req, res, next) {return res.json( await user_controller.getUser_ByID(req.params.user_id));});


  // return res.status(200).send({ auth: true, token: token });

api.post('/users/login', async function(req, res, next) {return res.json( await user_controller.logIn(req.body));});


module.exports = api;



