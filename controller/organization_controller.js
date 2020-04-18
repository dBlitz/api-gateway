var organization_service = require('../services/organization_service');
var bodyParser = require('body-parser')

async function getAllOrganizations() {
    const allOrganizations =  await organization_service.getAllOrganizations();
    return allOrganizations;
}

async function getOrganizationByID(organization_id) {
   var the_organization =  await organization_service.getOrganizationByID(organization_id);
   return the_organization;
}

async function createOrganization(organization) {
   const created_organization =  await organization_service.createOrganization(organization);
   return created_organization;
}

module.exports = {
    getAllOrganizations,
    getOrganizationByID,
    createOrganization
};

