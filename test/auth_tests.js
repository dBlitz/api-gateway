// process.env.NODE_ENV = 'test';


// let chai = require('chai');
// let chaiHttp = require('chai-http');
// let app = require('../app');
// let should = chai.should();
// let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
// chai.use(chaiHttp);


// // NEED THIS!!!!!
// //   before(function(done) {


    
// //     // request(url)
// //     //   .post('/api/users/login')
// //     //   .send({ _id: user1._id, password: user1.password })
// //     //   .end(function(err, res) {
// //     //     token = res.body.token; // Or something
// //     //     done();
// //     //   });

// describe('/POST Login User', () => {
//   it('it should allow a user to login, and will send back authorization token', (done) => {
//     chai.request(app)
//     .post('/api/users/login')
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



// describe('/POST Login User', () => {
//   it('it should allow a user to login, and will send back authorization token', (done) => {
//     chai.request(app)
//     .post('/auth/authorize')
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

