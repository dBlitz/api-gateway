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

//POST Create Mine
api.post('/create', async function(req, res, next) {

	var authorized_user = await authorize.authorize(req.header('Authorization'))
	return res.json( await mine_controller.createMine(authorized_user, req.body));});

// // GET Mines by User ID
// api.get('/user/:user_id', async function(req, res, next) {
// 	var mines = await mine_controller.getMines_ByUserID(req.params.user_id);
// 	return res.json(mines);
// });

// api.get('/:mine_id', async function(req, res, next) {
//  	var mines = await mine_controller.getMine_ByMineID(req.params.mine_id);
// 	return res.json(mines);
// });

// // POST UPDATE MINE
// api.post('/update', async function(req, res, next) {
// 	var updated_mine_response = await mine_controller.updateMine(req.body);
// 	return res.json({
// 		  updated_mine_response
// 		});
// });

// api.post('/user/add', async function(req, res, next) {
// 	var updated_mine_response = await mine_controller.addUsertoMine(req.body);
// 	return res.json({
// 		  updated_mine_response
// 		});
// });


  // return res.status(200).send({ auth: true, token: token });


  module.exports = api;



