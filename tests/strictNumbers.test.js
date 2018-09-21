var expect  = require('chai').expect;
var testers = require('../index');

describe ("Testing 'strictNumbers' tester function", () => {

    it("should return FALSE - strictNumbers('1234')", function(){
        expect( testers.strictNumbers('1234') ).to.be.false;
    });
    it("should return TRUE - strictNumbers('1234', checkType = false)", function(){
        expect(testers.strictNumbers('1234', false)).to.be.true;
    });

    it("should return TRUE - strictNumbers(1234)", function(){
        expect(testers.strictNumbers(1234)).to.be.true;
    });
    it("should return TRUE - strictNumbers(1234, checkType = false)", function(){
        expect(testers.strictNumbers(1234, false)).to.be.true;
    });

    it("should return FALSE - strictNumbers(`123`)", function(){
        expect(testers.strictNumbers(`123`)).to.be.false;
    });
    it("should return TRUE - strictNumbers(`123`, checkType = false)", function(){
        expect(testers.strictNumbers(`123`, false)).to.be.true;
    });

    it("should return FALSE - strictNumbers()", function(){
        expect(testers.strictNumbers()).to.be.false;
    });
    it("should return FALSE - strictNumbers(null)", function(){
        expect(testers.strictNumbers(null)).to.be.false;
    });

})
    