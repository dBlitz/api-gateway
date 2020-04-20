process.env.NODE_ENV = 'test';


let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
chai.use(chaiHttp);


// NEED THIS!!!!!
//   before(function(done) {


    
//     // request(url)
//     //   .post('/api/users/login')
//     //   .send({ _id: user1._id, password: user1.password })
//     //   .end(function(err, res) {
//     //     token = res.body.token; // Or something
//     //     done();
//     //   });


describe('/POST Login User', () => {
  it('it should allow a user to login, and will send back authorization token', (done) => {
    chai.request(app)
    .post('/api/users/login')
    .set("Content-Type", "application/json")
    .send({
      email_address: "satoshi@ysatoshi.com",
      password: 'abcd1234'})
    .end((err, res) => {
      res.should.have.status(200);
      console.log("whatttttt" + res.body)

    //   for(key in res.body) {
    //     if(res.body.hasOwnProperty(key)) {
    //         var value = res.body[key];
    //         console.log(key + ": " + value)
    //         //do something with value;
    //     }
    // }
      done();
    });
  });
});

// // describe('/POST Login User', () => {
// //   it('it should allow a user to login, and will send back authorization token', (done) => {
// //     chai.request(app)
// //     .post('/api/users/login')
// //     .set("Content-Type", "application/json")
// //     .send({
// //       email_address: "satoshi@ysatoshi.com",
// //       firstName:'Satoshi', 
// //       lastName: 'Nakamoto',
// //       password: 'abcd1234'})
// //     .end((err, res) => {
// //       res.should.have.status(200);
// //       console.log(res.body)
// //       done();
// //     });
// //   });
// // });


//   });

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


// describe('/GET All Users', () => {
//   it('it should GET all Users, based on bearer JWT token authorization', (done) => {
//     chai.request(app)
//     .get('/api/users/all')
//     .set('Authorization', 'Bearer ' + token)
//     .set('Accept', 'application/json')

//     .end((err, res) => {
//       res.should.have.status(200);
//       // console.log(res.body)
//       done();
//     });
//   });
// });


