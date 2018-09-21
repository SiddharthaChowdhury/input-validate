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

describe("testing isPersonName tester function", function(){
    it("should return FALSE isPersonName('Do')", function(){
        expect(testers.isPersonName('Do')).to.be.false;
    });

    it("should return TRUE isPersonName('Doe')", function(){
        expect(testers.isPersonName('Doe')).to.be.true;
    });

    it("should return TRUE isPersonName('John Doe')", function(){
        expect(testers.isPersonName('John Doe')).to.be.true;
    });

    it("should return TRUE isPersonName('Mr. John Doe')", function(){
        expect(testers.isPersonName('Mr. John Doe')).to.be.true;
    });


    it("should return TRUE isPersonName('Mrs, Johane Doe')", function(){
        expect(testers.isPersonName('Mrs, Johane Doe')).to.be.true;
    });

    it("should return FALSE isPersonName('Etc. John')", function(){
        expect(testers.isPersonName('Etc. John')).to.be.false;
    });

    it("should return FALSE isPersonName('Mr. J')", function(){
        expect(testers.isPersonName('Mr. J')).to.be.false;
    });

    it("should return FALSE isPersonName('$Dollar Sign')", function(){
        expect(testers.isPersonName('$Dollar Sign')).to.be.false;
    });

    it("should return FALSE isPersonName('John_Doe')", function(){
        expect(testers.isPersonName('John_Doe')).to.be.false;
    });
})

describe("testing isCountry() tester function among more than 210 countries", function(){
    it("should return TRUE isCountry('Panama')", function(){
        expect(testers.isCountry('Panama')).to.be.true;
    });
    it("should return TRUE isCountry('el salvador')", function(){
        expect(testers.isCountry('el salvador')).to.be.true;
    });

    it("should return TRUE isCountry('st lucia')", function(){
        expect(testers.isCountry('st lucia')).to.be.true;
    });

    it("should return TRUE isCountry('St. Lucia')", function(){
        expect(testers.isCountry('St. Lucia')).to.be.true;
    });
    it("should return TRUE isCountry('Saint Lucia')", function(){
        expect(testers.isCountry('Saint Lucia')).to.be.true;
    });

    it("should return TRUE isCountry('US')", function(){
        expect(testers.isCountry('US')).to.be.true;
    });

    it("should return TRUE isCountry('united states')", function(){
        expect(testers.isCountry('united states')).to.be.true;
    });
});