var expect  = require('chai').expect;
var testers = require('../index');

describe ("testing quickPassword tester function", function(){
    it("should return FALSE quickPassword('1234567')", function(){
        expect(testers.quickPassword('1234567')).to.be.false;
    });
    it("should return FALSE quickPassword('123456789')", function(){
        expect(testers.quickPassword('123456789')).to.be.false;
    });
    it("should return FALSE quickPassword('abcDEFghij')", function(){
        expect(testers.quickPassword('abcDEFghij')).to.be.false;
    });
    it("should return FALSE quickPassword('12345 6789')", function(){
        expect(testers.quickPassword('12345 6789')).to.be.false;
    });

    it("should return TRUE quickPassword('12345 A@ 6789')", function(){
        expect(testers.quickPassword('12345 A@ 6789')).to.be.true;
    });
    it("should return TRUE quickPassword('123abc_XYZ')", function(){
        expect(testers.quickPassword('123abc_XYZ')).to.be.true;
    });
    it("should return TRUE quickPassword('1234abcXYZ')", function(){
        expect(testers.quickPassword('1234abcXYZ')).to.be.true;
    });
});
