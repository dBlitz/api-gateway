// var user_service = require('../services/user_service');
var bodyParser = require('body-parser')
const request = require('request');
var jwt = require('jsonwebtoken');
var secret_key = require('../database/config/auth/secret_key').SECRET_KEY.toString();
var http = require('http');


async function authorize(the_token) {

	var token = JSON.parse(the_token).token;
	console.log("this is token: " + token)
	var decoded_token = await jwt.verify(token, secret_key, function(err, decoded) {
		if ( err ) {
			throw new Error('invalid Authorization');
		}
		else {
			return decoded;
		}
	});

	return decoded_token;
}

module.exports = {
	authorize

};








// function authorize(roles = []) {
//     // roles param can be a single role string (e.g. Role.User or 'User') 
//     // or an array of roles (e.g. [Role.Admin, Role.User] or ['Admin', 'User'])
//     if (typeof roles === 'string') {
//         roles = [roles];
//     }

//     return [
//         // authenticate JWT token and attach user to request object (req.user)
//         expressJwt({ secret }),

//         // authorize based on user role
//         (req, res, next) => {
//             if (roles.length && !roles.includes(req.user.role)) {
//                 // user's role is not authorized
//                 return res.status(401).json({ message: 'Unauthorized' });
//             }

//             // authentication and authorization successful
//             next();
//         }
//     ];
// }

