var expect  = require('chai').expect;
var testers = require('../index');

describe ("Testing 'strictAlphabets' tester function", () => {

    it("should return TRUE - strictAlphabets('abc')", function(){
        expect(testers.strictAlphabets('abc')).to.be.true;
    });
    it("should return TRUE - strictAlphabets('abcABC')", function(){
        expect(testers.strictAlphabets('abcABC')).to.be.true;
    });

    it("should return FALSE - strictAlphabets(123)", function(){
        expect(testers.strictAlphabets(123)).to.be.false;
    });

    it("should return FALSE - strictAlphabets('1234')", function(){
        expect(testers.strictAlphabets('1234')).to.be.false;
    });

    it("should return FALSE - strictAlphabets(`123`)", function(){
        expect(testers.strictAlphabets(`123`)).to.be.false;
    });

    it("should return FALSE - strictAlphabets('123abc')", function(){
        expect(testers.strictAlphabets('123abc')).to.be.false;
    });

    it("should return FALSE - strictAlphabets()", function(){
        expect(testers.strictAlphabets()).to.be.false;
    });

    it("should return FALSE - strictAlphabets(null)", function(){
        expect(testers.strictAlphabets(null)).to.be.false;
    });
})