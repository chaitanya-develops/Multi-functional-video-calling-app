var should = require("should");
var supertest = require("supertest");
const logger = require('../logging/loggerConfig');

var server = supertest.agent("http://localhost:2442");


// Signup
describe('\n\n\n\nSignup ::', () => {

    it('Create User Success\n\n', (done) => {
        server
            .post('/api/authentication/register')
            .send({
              username: "tonton",  email: "tosn@gmail.com", password: "friends"
            })
            .end((err, res) => {
                res.status.should.equal(201);
                done();
            });
    }).timeout(10000);

    it('Create User Failure\n\n', (done) => {
        server
            .post('/api/authentication/register')
            .send({
              username: "tonton",  email: "ton@.com", password: "friends"
            })
            .end((err, res) => {
                res.status.should.equal(400);
                done();
            });
    }).timeout(10000);


});
describe('\n\n\n\nLogin test :: ', () => {

    it('User Login Success\n\n', (done) => {
        server
            .post('/api/authentication/login')
            .send({
              email: "toon@gmail.com", password: "friends"
            })
            .end((err, res) => {
                res.status.should.equal(201);
                done();
            });
    }).timeout(10000);


    it('User Login Failure\n\n', (done) => {
        server
            .post('/api/authentication/login')
            .send({
              email: "tosdfsdon@gmail.com", password: "friends"
            })
            .end((err, res) => {
                res.status.should.equal(400);
                done();
            });
    }).timeout(10000);

});