var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("https://sportsfront-gutsstaging.igamingcloud.com");

// UNIT test begin
describe("Home unit test",function(){

  // #1 should return home page

  it("should return home page",function(done){

    // calling home page api
    server
    .get("/")
    .expect("Content-type",/json/)
    .expect(403) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 403
      res.status.should.equal(403);
      // Error key should be false.
      //res.body.error.should.equal(false);
      done();
    });
  });

});

describe("Docs unit test",function(){
  it("should return the docs page",function(done){
    server
    .get("/docs")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      // Error key should be false.
      //res.body.error.should.equal(false);
      done();
    });
  });
});

describe("Menu unit test",function(){
  it("should return the docs page",function(done){
    server
    .get("/menu/get?language=en")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      // Error key should be false.
      //res.body.error.should.equal(false);
      done();
    });
  });
});
