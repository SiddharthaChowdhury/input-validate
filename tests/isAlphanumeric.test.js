var expect  = require('chai').expect;
var testers = require('../index');

describe ("Testing isAlphanumeric tester function", function(){

    it("should return TRUE isAlphanumeric('abc123ABC')", function(){
        expect(testers.isAlphanumeric('abc123ABC')).to.be.true;
    });

    it("should return TRUE isAlphanumeric('abc')", function(){
        expect(testers.isAlphanumeric('abc')).to.be.true;
    });
    it("should return FALSE isAlphanumeric('abc', strict = true)", function(){
        expect(testers.isAlphanumeric('abc', true)).to.be.false;
    });

    it("should return TRUE isAlphanumeric(123)", function(){
        expect(testers.isAlphanumeric(123)).to.be.true;
    });
    it("should return FALSE isAlphanumeric(123, strict = true)", function(){
        expect(testers.isAlphanumeric(123, true)).to.be.false;
    });

    it("should return FALSE isAlphanumeric('123 abc')", function(){
        expect(testers.isAlphanumeric('123 abc')).to.be.false;
    });

    it("should return FALSE isAlphanumeric('123@abc')", function(){
        expect(testers.isAlphanumeric('123@abc')).to.be.false;
    });
});