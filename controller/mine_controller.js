// var user_service = require('../services/user_service');
var bodyParser = require('body-parser')
const authorize = require('../database/config/authorize.js')
const request = require('request');
var jwt = require('jsonwebtoken');
var secret_key = require('../database/config/auth/secret_key').SECRET_KEY.toString();
var http = require('http');

async function createMine(authorized_user, the_mine) {
  return new Promise(function (resolve, reject) {
   request.post({url:'http://localhost:1100/api/mine/create', 
    form: {mine_name: the_mine.mine_name
    }
    }, function(err,httpResponse,body) { 
        resolve(body)
      /* ... */ })
 });
}

async function getMines_All(data) {
  roles = data.roles;
  if (roles.length && !roles.includes("Employee")) {
    //                 // user's role is not authorized
    return 'Unauthorized';
  }
  return new Promise(function (resolve, reject) {
    request('http://localhost:1100/api/mine/all/', function (error, response, body) {
        resolve(JSON.parse(body));
      });
  });
}


// async function getUser_ByID(data) {
//   var token = JSON.parse(data).token;
//   var decoded_token = await jwt.verify(token, secret_key, function(err, decoded) {
//     if ( err ) {
//       throw new Error('invalid Authorization');
//     }
//     else {
//       return decoded;
//     }
//   });
//   return new Promise(function (resolve, reject) {

//     request('http://localhost:1000/api/user/' + decoded_token.user, function (error, response, body) {
//     // console.error('error:', error); // Print the error if one occurred
//     // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     // console.log('body:', JSON.parse(body)); // Print the HTML for the Google homepage.
//     resolve(JSON.parse(body));
//   });


//   });
// }

module.exports = {
  getMines_All,
  createMine
};