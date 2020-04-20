var connection = require('../database/config/db_connection');
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
var secret_key = require('../database/config/auth/secret_key').SECRET_KEY.toString();
var request = require('request');

async function authorize(token) {

	jwt.verify(token, secret_key, function(err, decoded) {
    if ( err ) {
      throw new Error('invalid Authorization');
    }
    else {
      return decoded;
    }

  });

}

async function authenticate(token) {



}
// async function authorize(user) {



// 	// request.post({url:'http://localhost:3000/authorize', formData: formData}, function optionalCallback(err, httpResponse, body) {
// 	//   if (err) {
// 	//     return console.error('invalid credentials:', err);
// 	//   }
// 	//   console.log('Upload successful!  Server responded with:', body);
// 	// });

// }

module.exports = {
	authorize,
	authenticate
};