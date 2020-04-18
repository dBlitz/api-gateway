var connection = require('../database/config/db_connection');

async function getAllOrganizations() {
	var sequelize = await connection.databaseConnection();
	var Organization = sequelize.import('../database/models/organization.js');    
	var all_organizations = await Organization.findAll().then(users => {
		const response = JSON.stringify(users, null, 4);
		sequelize.close()
		return response;
	});
	return all_organizations;
}

async function getOrganizationByID(organization_id) {
	var sequelize = await connection.databaseConnection();
	var Organization = sequelize.import('../database/models/organization.js');    
	var the_organization = await Organization.findOne({ where: { id: organization_id } }).then(user => {
		const response = JSON.stringify(user, null, 4);
		sequelize.close()
		return response;
	});
	return the_organization;
}

async function createOrganization(organization) {
	var sequelize = await connection.databaseConnection();
	var Organization = sequelize.import('../database/models/organization.js');    
	const createdOrganization = await Organization.create({ org_name: organization.org_name });
	sequelize.close()
	return createdOrganization;
}

module.exports = {
	getAllOrganizations,
	getOrganizationByID, 
	createOrganization
};