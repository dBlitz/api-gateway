// process.env.NODE_ENV = 'test';


// let chai = require('chai');
// let chaiHttp = require('chai-http');
// let app = require('../app');
// let should = chai.should();

// chai.use(chaiHttp);


// ////// NEED TO ADD EAGER LOADING TO ORG, 
// //https://sequelize.org/master/manual/eager-loading.html
// describe('/POST Create Organization', () => {
//   it('it should create a Organization', (done) => {

//     chai.request(app)
//     .post('/organizations/create')
//     .set("Content-Type", "application/json")
//     .send({
//       org_name:'Satoshi'})
//     .end((err, res) => {
//       res.should.have.status(200);
//       console.log(res.body)
//       done();
//     });
//   });
// });

// describe('/GET Organizations', () => {
//   it('it should GET all Organizations', (done) => {

//     chai.request(app)
//     .get('/organizations')
//     .end((err, res) => {
//       res.should.have.status(200);
//       console.log(res.body)
//       done();
//     });
//   });
// });

// describe('/GET Organization By ID', () => {
//   it('it should GET a User by user_id', (done) => {

//     chai.request(app)
//     .get('/organizations/1')
//     .end((err, res) => {
//       res.should.have.status(200);
//       console.log(res.body)
//       done();
//     });
//   });
// });


