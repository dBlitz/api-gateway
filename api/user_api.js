var express = require('express');
var api = express.Router();
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var user_controller = require('../controller/user_controller');
var auth_controller = require('../controller/auth_controller');

// GET All Users
api.get('/all', async function(req, res, next) { 	
 return res.json( await user_controller.getUsers_All(req.header('Authorization')));
});

//POST Create User
api.post('/create', async function(req, res, next) {
	return res.json( await user_controller.createUser(req.body));
});

// GET User by ID
api.get('/:user_id', async function(req, res, next) {
	return res.json( await user_controller.getUser_ByID(req.params.user_id));
});

  // return res.status(200).send({ auth: true, token: token });

api.post('/login', async function(req, res, next) {
	return res.json( await user_controller.login(req.body));
});


module.exports = api;



