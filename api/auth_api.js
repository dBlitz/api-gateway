var express = require('express');
var api = express.Router();
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var auth_controller = require('../controller/auth_controller');

api.post('/authorize', async function(req, res, next) {return res.json( await auth_controller.authorize(req.body));});


module.exports = api;



