var Sequelize = require('sequelize');


async function databaseConnection() {
	var sequelize = await new Sequelize('dev_db', 'postgres', 'abcd1234', {
		host: 'localhost',
		dialect: 'postgres'
	});
	return sequelize
}

module.exports = {
	databaseConnection
};
