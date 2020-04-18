var connection = require('../database/config/db_connection');
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
var secret_key = require('../database/config/auth/secret_key').SECRET_KEY.toString();

async function getUsers_All() {
	var sequelize = await connection.databaseConnection();
	var User = sequelize.import('../database/models/user.js');    
	var allUsers = await User.findAll().then(users => {
		const response = JSON.stringify(users, null, 4);
		sequelize.close()
		return response;
	});
	return allUsers;
}

async function getUser_ByID(user_id) {
	var sequelize = await connection.databaseConnection();
	var User = sequelize.import('../database/models/user.js');    
	var theUser = await User.findOne({ where: { id: user_id } }).then(user => {
		const response = JSON.stringify(user, null, 4);
		sequelize.close();
		return response;
	});
	return theUser;
}

async function createUser(user) {
	var sequelize = await connection.databaseConnection();
	var User = sequelize.import('../database/models/user.js'); 
	var password = await User.setPassword(user.password);
	const createdUser = await User.create({ email_address: user.email_address, firstName: user.firstName, lastName: user.lastName, password: password});
	sequelize.close();
	return createdUser;
}

async function logIn(user) {

	var sequelize = await connection.databaseConnection();
	var User = sequelize.import('../database/models/user.js'); 
	var user_token = await User.authenticate(user.email_address, user.password)
	console.log('SECRET_KEY: ' + secret_key)
	return user_token;
}

module.exports = {
	getUsers_All,
	createUser, 
	getUser_ByID,
	logIn
};