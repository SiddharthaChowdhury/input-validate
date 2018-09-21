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

describe ("testing quickPassword tester function", function(){
    
})
