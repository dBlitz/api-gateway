var auth_service = require('../services/auth_service');
var bodyParser = require('body-parser')

async function authorize(user) {
   const theUser = await auth_service.authorize(user);
   return theUser;
}

module.exports = {
    authorize
};

