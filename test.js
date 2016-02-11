var supertest = require("supertest");
var should = require("should");
var expect = require("expect");

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
  it("should return the menu and menu should have some sports",function(done){
    server
    .get("/menu/get?language=en")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      //check if we have sports..
      should(res.body.sports.length > 5).be.equal(true);
      done();
    });
  });
});

describe("Prelive unit test",function(){
  it("should return prelive matches ",function(done){
    server
    .get("/prelive/get?language=en")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      //check if we have sports..
      should(res.body.PreliveMatches.length > 50).be.equal(true);
      done();
    });
  });
});

describe("Search unit test",function(){
  it("should return earch data", function(done){
    server
    .get("/Prelive/Search?language=en&query=ars")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      //check if we have sports..
      should(res.body.tournament.length > 1).be.equal(true);
      done();
    });
  });
});
