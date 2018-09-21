var expect  = require('chai').expect;
var testers = require('../index');


describe("testing isEmail tester function", function(){
    it("should return TRUE isEmail('valid@email.addr')", function(){
        expect(testers.isEmail('valid@email.addr')).to.be.true;
    });
    it("should return TRUE isEmail('VALID@EMAIL.ADDR')", function(){
        expect(testers.isEmail('VALID@EMAIL.ADDR')).to.be.true;
    });
    it("should return TRUE isEmail('valid@email.ad.dr')", function(){
        expect(testers.isEmail('valid@email.ad.dr')).to.be.true;
    });
    it("should return TRUE isEmail('this-is_va.lid@email.ad.dr')", function(){
        expect(testers.isEmail('this-is_va.lid@email.ad.dr')).to.be.true;
    });

    it("should return FALSE isEmail('val id@email.ad.dr')", function(){
        expect(testers.isEmail('val id@email.ad.dr')).to.be.false;
    });
    it("should return FALSE isEmail('val/id@email.ad.dr')", function(){
        expect(testers.isEmail('val/id@email.ad.dr')).to.be.false;
    });
    it("should return FALSE isEmail(' valid@email.ad.dr')", function(){
        expect(testers.isEmail(' valid@email.ad.dr')).to.be.false;
    });
    it("should return FALSE isEmail(' valid@email.addrress')", function(){
        expect(testers.isEmail('valid@email.addrress')).to.be.false;
    });
});
