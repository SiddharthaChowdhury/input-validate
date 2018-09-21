var expect  = require('chai').expect;
var testers = require('../index');

describe ("Testing alphanumeric tester function", function(){

    it("should return TRUE alphanumeric('abc123ABC')", function(){
        expect(testers.alphanumeric('abc123ABC')).to.be.true;
    });

    it("should return TRUE alphanumeric('abc')", function(){
        expect(testers.alphanumeric('abc')).to.be.true;
    });
    it("should return FALSE alphanumeric('abc', strict = true)", function(){
        expect(testers.alphanumeric('abc', true)).to.be.false;
    });

    it("should return TRUE alphanumeric(123)", function(){
        expect(testers.alphanumeric(123)).to.be.true;
    });
    it("should return FALSE alphanumeric(123, strict = true)", function(){
        expect(testers.alphanumeric(123, true)).to.be.false;
    });

    it("should return FALSE alphanumeric('123 abc')", function(){
        expect(testers.alphanumeric('123 abc')).to.be.false;
    });

    it("should return FALSE alphanumeric('123@abc')", function(){
        expect(testers.alphanumeric('123@abc')).to.be.false;
    });
});