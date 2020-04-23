var express = require('express');
var api = express.Router();
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var user_controller = require('../controller/user_controller');
var auth_controller = require('../controller/auth_controller');

// GET All Users
api.get('/all', async function(req, res, next) { 	
	var all_users = await user_controller.getUsers_All(req.header('Authorization'));
	console.log("all users " + all_users)
	return res.json( all_users);
});

//POST Create User
api.post('/create', async function(req, res, next) {
	var created_user =  await user_controller.createUser(req.body)
	return res.json( created_user);
});

// GET User by ID
api.get('/user/getter', async function(req, res, next) {
	var user = await user_controller.getUser_ByID(req.header('Authorization'));

	console.log("hahahahahahahaha" + user);
	return res.json(user);
});

  // return res.status(200).send({ auth: true, token: token });

  api.post('/login', async function(req, res, next) {
  	var auth_token = await user_controller.login(req.body)
  	return res.json(auth_token);
  });


  module.exports = api;



