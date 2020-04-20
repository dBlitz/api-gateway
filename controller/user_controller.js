// var user_service = require('../services/user_service');
var bodyParser = require('body-parser')
const authorize = require('../database/config/authorize.js')

async function getUsers_All() {
    const allUsers =  await user_service.getUsers_All();
    console.log("hahahahahaha")
    return allUsers;
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

  return "yoooooooooo";

// request.post({url:'http://localhost:1000/login', form: {key:'value'}}, function(err,httpResponse,body){ /* ... */ })

   // const theUser = await user_service.logIn(user);
   // return theUser;
}

module.exports = {
    getUsers_All,
    getUser_ByID,
    createUser,
    login
};

