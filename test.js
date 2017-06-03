var assert=require("chai").assert,
expect=require("chai").expect,
should=require("chai").should();
var supertest=require("supertest");
var server = supertest.agent("http://localhost:3000")


describe("Testing ContactList Api",function(){
	it("should get all contacts",function(done)
	{
		server.get("/getcontact")
		      .expect(200)
		      .expect('content-type',/json/)
		       .end(function(err,res){
		       	 console.log(res.body);
		       	 //res.body.should.have.property('name')
		       	 res.body.forEach(function(data){
		       	data.should.have.property('name')
		       	data.name.should.equal("asha")
		       	data.name.should.have.lengthOf(4)
		       	 	console.log(data)
		       	 })
		       	 done();
		       })
		// var foo="asha";
		// var tea={
		// 	flavors:'sweet'
		// };
		//assert.typeOf(foo,'string')
		//expect.(foo).to.be.a('string');
		// foo.should.be.a('string');
		// foo.should.equal("asha");
		// foo.should.have.lengthOf(4)
		// tea.should.have.property('flavors')
	})
	
});



// describe.only("This is my second test suite",function(){
// 	before("Begore hook",function()
// 	{
// 		console.log("this is befire hook")
// 	})
// 	after("After hook",function(){
// 		console.log("this is after hook")
// 	})
// 	beforeEach("this is before Each",function(){
// 		console.log("this is befire each hook")
// 	})
// 	afterEach("this is after Each",function(){
// 		console.log("this is after Each hook")
// 	})
// 	it.only("My first test case",function(){
// 		console.log("my first test case")
// 	})
// 	it("My first test case",function(){
// 		console.log("my second test case")
// 	})
// })