var express = require('express');
var api = express.Router();
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var mine_controller = require('../controller/mine_controller');
var auth_controller = require('../controller/auth_controller');
var authorize = require('../helpers/authorize');

// GET All Mines
api.get('/all', async function(req, res, next) { 

	var authorized_user = await authorize.authorize(req.header('Authorization'))
	var all_mines = await mine_controller.getMines_All(authorized_user);
	return res.json(all_mines);
});

  // return res.status(200).send({ auth: true, token: token });


  module.exports = api;



