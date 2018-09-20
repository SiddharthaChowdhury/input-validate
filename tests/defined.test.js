var expect  = require('chai').expect;
var testers = require('../index');

describe ("Testing 'OnlyNumber' tester function", () => {
    it("should return FALSE - onlyNumber('1234')", function(){
        var isValid = testers.onlyNumber('1234');
        expect(isValid).to.be.false;
    });

    it("should return TRUE - onlyNumber(1234)", function(){
        var isValid = testers.onlyNumber(1234);
        expect(isValid).to.be.true;
    });

    it("should return FALSE - onlyNumber(`123`)", function(){
        var isValid = testers.onlyNumber(`123`);
        expect(isValid).to.be.false;
    });

    it("should return TRUE - onlyNumber(`123`, false) : Disabled type checking", function(){
        var isValid = testers.onlyNumber(`123`, false);
        expect(isValid).to.be.true;
    });

    it("should return TRUE - onlyNumber('1234', false) : Disabled type checking", function(){
        var isValid = testers.onlyNumber('1234', false);
        expect(isValid).to.be.true;
    });
})
    