var supertest = require("supertest");
var chai = require('chai'),
assert = chai.assert,
expect = chai.expect,
should = chai.should;

// This agent refers to PORT where program is runninng.

var server = supertest.agent("https://sportsfront-guts.igamingcloud.com");

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
      done();
    });
  });
});

describe("Menu unit test",function(){
  it("should return the menu and menu should have some sports",function(done){
    server
    .get("/menu/get?language=en")
    .expect("Content-type",/json/)
    .expect(function(res) {
    }) // THis is HTTP response
    .end(function(err,res){
      	expect(res.body.sports.length).to.be.above(5);
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
      expect(res.body.PreliveMatches.length).to.be.above(5);
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
      expect(res.body.tournament.length).to.be.above(1);
      done();
    });
  });
});
