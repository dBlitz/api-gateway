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
      // console.log(res.body)
      done();
    });
  });
});


describe('/POST Create Mine', () => {
  it('it should create a Mine', (done) => {
    chai.request(app)
    .post('/api/mine/create')
    .set("Content-Type", "application/json")
    .set('Authorization', auth_token)
    .send({
      mine_name: "New Name for Mine"
    })
    .end((err, res) => {
      res.should.have.status(200);
      console.log(res.body)
      done();
    });
  });
});

describe('/GET Mines By User ID', () => {
  it('it should GET all Mines by User ID', (done) => {
    chai.request(app)
    .get('/api/mine/getter/user')
    .set('Authorization', auth_token)
    .set('Accept', 'application/json')
    .end((err, res) => {
      res.should.have.status(200);
      console.log(res.body)
      done();
    });
  });
});


// //GET AUTHORIZER ACCESS TOKEN 

// //https://www.oauth.com/oauth2-servers/authorization/the-authorization-response/
// // https://www.oauth.com/oauth2-servers/token-introspection-endpoint/




