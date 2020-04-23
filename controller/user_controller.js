// var user_service = require('../services/user_service');
var bodyParser = require('body-parser')
const authorize = require('../database/config/authorize.js')
const request = require('request');
var jwt = require('jsonwebtoken');
var secret_key = require('../database/config/auth/secret_key').SECRET_KEY.toString();
var http = require('http');
async function getUsers_All(data) {
  var token = JSON.parse(data).token;
  var decoded_token = await jwt.verify(token, secret_key, function(err, decoded) {
    if ( err ) {
      throw new Error('invalid Authorization');
    }
    else {
      console.log(decoded)
      return decoded;
    }
  });
  return decoded_token;
}

async function getUser_ByID(data) {
  var token = JSON.parse(data).token;
  var decoded_token = await jwt.verify(token, secret_key, function(err, decoded) {
    if ( err ) {
      throw new Error('invalid Authorization');
    }
    else {
      return decoded;
    }
  });
  return new Promise(function (resolve, reject) {

    request('http://localhost:1000/api/users/user/' + decoded_token.user, function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', JSON.parse(body)); // Print the HTML for the Google homepage.
    resolve(JSON.parse(body));
  });
 // http.get({
 //          hostname: 'localhost',
 //          port: 1000,
 //          path: '/api/users/user/' + decoded_token.user,
 //        agent: false  // Create a new agent just for this one request
 //      }, (res) => {
 //        console.log(res.body)
 //        resolve(res.body);
 //        // Do stuff with response
 //      });


  });

      // return decoded_token;

      // console.log("decoded???" + decoded_token.user)
      // return new Promise(function (resolve, reject) {
      // //  

      // });
    }

 //      return new Promise(function (resolve, reject) {
 //   request.get({url:'http://localhost:1000/api/users/user/' + decoded_token.user.toString(), 
 //    form: {email_address: user.email_address, 
 //      password: user.password}}, function(err,httpResponse,body) { 
 //        resolve(body)
 //      /* ... */ })
 // });

 async function createUser(theUser) {
   const created_user =  await user_service.createUser(theUser);
   return created_user;
 }

 async function login(user) {
  return new Promise(function (resolve, reject) {
   request.post({url:'http://localhost:1000/api/users/login', 
    form: {email_address: user.email_address, 
      password: user.password}}, function(err,httpResponse,body) { 
        resolve(body)
      /* ... */ })
 });
}

module.exports = {
  getUsers_All,
  getUser_ByID,
  createUser,
  login
};