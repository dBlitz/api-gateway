process.env.NODE_ENV = 'test';


let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();
var auth_token;
chai.use(chaiHttp);

// describe('/POST Create User', () => {
//   it('it should allow a user to login, and will send back authorization token', (done) => {

//     chai.request(app)
//     .post('/api/user/create')
//     .set("Content-Type", "application/json")
//     .send({
//       email_address: "friend@friend.com",
//       firstName:'Friend', 
//       lastName: 'Friend',
//       password: 'abcd1234',
//       roles: ["Employee", "Admin"]
//     })
//     .end((err, res) => {
//       res.should.have.status(200);
//       // console.log("Response:" + res.body)
//       done();
//     });
//   });
// });

describe('/POST Login User', () => {
  it('it should allow a user to login, and will send back authorization token', (done) => {
    chai.request(app)
    .post('/api/user/login')
    .set("Content-Type", "application/json")
    .send({
      email_address: "satoshi@ysatoshi.com",
        password: 'abcd1234'})
    .end((err, res) => {
      res.should.have.status(200);
      console.log(res.body)
      auth_token = res.body
      done();
    });
  });
});

describe('/GET All Mines', () => {
  it('it should GET all Mines', (done) => {
    chai.request(app)
    .get('/api/mine/all')
    .set('Authorization', auth_token)
    .set('Accept', 'application/json')
    .end((err, res) => {
      res.should.have.status(200);
      console.log(res.body)
      done();
    });
  });
});





// describe('/POST Create User', () => {
//   it('it should create a User', (done) => {
//     chai.request(app)
//     .post('/api/users/create')
//     .set("Content-Type", "application/json")
//     .send({
//       email_address: "satoshi@ysatoshi.com",
//       firstName:'Satoshi', 
//       lastName: 'Nakamoto',
//       password: 'abcd1234'})
//     .end((err, res) => {
//       res.should.have.status(200);
//       console.log(res.body)
//       done();
//     });
//   });
// });



// //GET AUTHORIZER ACCESS TOKEN 

// //https://www.oauth.com/oauth2-servers/authorization/the-authorization-response/
// // https://www.oauth.com/oauth2-servers/token-introspection-endpoint/




