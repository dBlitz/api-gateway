var connection = require('../database/config/db_connection');
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
var secret_key = require('../database/config/auth/secret_key').SECRET_KEY.toString();

async function authorize(user) {

	var sequelize = await connection.databaseConnection();
	var User = sequelize.import('../database/models/user.js'); 
	var user_token = await User.authenticate(user.email_address, user.password)
	console.log('SECRET_KEY: ' + secret_key)
	return user_token;
}

module.exports = {
	authorize
};