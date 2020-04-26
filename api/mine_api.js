var express = require('express');
var api = express.Router();
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var user_controller = require('../controller/user_controller');
var auth_controller = require('../controller/auth_controller');
var authorize = require('../helpers/authorize');

// GET All Users
api.get('/all', async function(req, res, next) { 
	// var authorized_user = await authorize.authorize(req.header('Authorization'))
	// var all_users = await user_controller.getUsers_All(authorized_user);
	// return res.json(all_users);
});

//POST Create User
api.post('/create', async function(req, res, next) {
	// var created_user =  await user_controller.createUser(req.body)
	// return res.json( created_user);
});

// GET User by ID
api.get('/getter', async function(req, res, next) {
	// var user = await user_controller.getUser_ByID(req.header('Authorization'));
	// return res.json(user);
});

  // return res.status(200).send({ auth: true, token: token });


  module.exports = api;



