process.env.NODE_ENV = 'test';
const app = require("../server");
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
var request = require('supertest');

chai.use(chaiHttp);
describe('/POST login',()=>{
    it('POSITIVE TEST FOR LOGIN',(done)=>{
        const res = {
            "email": "test1@gmail.com",
            "password": "test1"
            
        }
        chai.request(app).post('/api/authentication/login').send(res).end((err,res)=> {
            expect(res).to.have.status(201);
            done();
        });
    }).timeout(10000);

    it('NEGATIVE TEST FOR LOGIN',(done)=>{
        const res = {
            "email": "test1gmail.com",
            "password": "test1"
            
        }
        chai.request(app).post('/api/authentication/login').send(res).end((err,res)=> {
            expect(res).to.have.status(400);
            done();
        });
    }).timeout(10000);
});

describe('/POST register',()=>{
    // it('POSITIVE TEST FOR REGISTER',(done)=>{
    //     const res = {
    //         "username": "tester",
    //         "email": "test99@gmail.com",
    //         "password": "test99"
            
    //     }
    //     chai.request(app).post('/api/authentication/register').send(res).end((err,res)=> {
    //         expect(res).to.have.status(201);
    //         done();
    //     });
    // }).timeout(10000);

    it('NEGATIVE TEST FOR REGISTER',(done)=>{
        const res = {
            "username":"tester",
            "email": "test1gmail.com",
            "password": "test1"
            
        }
        chai.request(app).post('/api/authentication/register').send(res).end((err,res)=> {
            expect(res).to.have.status(400);
            done();
        });
    }).timeout(10000);
});
