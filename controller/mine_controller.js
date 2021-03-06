// var user_service = require('../services/user_service');
var bodyParser = require('body-parser')
const authorize = require('../database/config/authorize.js')
const request = require('request');
var jwt = require('jsonwebtoken');
var secret_key = require('../database/config/auth/secret_key').SECRET_KEY.toString();
var http = require('http');

async function createMine(authorized_user, the_mine) {
  var user_fks = [authorized_user.user]
  return new Promise(function (resolve, reject) {
   request.post({url:'http://localhost:1100/api/mine/create', 
    form: {mine_name: the_mine.mine_name, fk_user_ids: JSON.stringify([authorized_user.user])
    }, json:true
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

async function getMines_ByUserID(authorized_user) {
  return new Promise(function (resolve, reject) {
    request('http://localhost:1100/api/mine/user/' + authorized_user.user, function (error, response, body) {
        resolve(JSON.parse(body));
      });
  });
}

async function updateMine(authorized_user, the_mine) {
  return new Promise(function (resolve, reject) {
   request.post({url:'http://localhost:1100/api/mine/update', 
    form: { id: the_mine.id, mine_name: the_mine.mine_name }, json:true
    }, function(err,httpResponse,body) { 
        resolve(body)
      /* ... */ })
 });
}

async function addUsertoMine(authorized_user, the_mine) {
  return new Promise(function (resolve, reject) {
   request.post({url:'http://localhost:1100/api/mine/user/add', 
    form: { id: the_mine.id, fk_user_ids: JSON.stringify(the_mine.fk_user_ids) }, json:true
    }, function(err,httpResponse,body) { 
        resolve(body)
      /* ... */ })
 });
}

module.exports = {
  getMines_All,
  createMine,
  getMines_ByUserID,
  updateMine,
  addUsertoMine
};