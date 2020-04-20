// var user_service = require('../services/user_service');
var bodyParser = require('body-parser')
const authorize = require('../database/config/authorize.js')
const request = require('request');

async function getUsers_All() {
  // const allUsers =  await user_service.getUsers_All();

  return "aaaaaaaaa";
}

async function getUser_ByID(user_id) {
 var theUser =  await user_service.getUser_ByID(user_id);
 return theUser;
}

async function createUser(theUser) {
 const created_user =  await user_service.createUser(theUser);
 return created_user;
}

async function login(user) {
  return new Promise(function (resolve, reject) {
   request.post({url:'http://localhost:1000/api/users/login', 
    form: {email_address: user.email_address, password: user.password}}, function(err,httpResponse,body) { 
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