process.env.NODE_ENV = 'test';


let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();
var auth_token;
chai.use(chaiHttp);

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
          auth_token = res.body
          console.log("Response:" + auth_token)
          done();
        });
      });
    });



  describe('/GET All Users', () => {
    it('it should GET all Users, based on bearer JWT token authorization', (done) => {
      chai.request(app)
      .get('/api/users/all')
      .set('Authorization', auth_token)
      .set('Accept', 'application/json')
      .end((err, res) => {
        res.should.have.status(200);
        console.log("auth token " + auth_token)
      console.log(res.body)
      done();
    });
    });
  });

  // test cases




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




