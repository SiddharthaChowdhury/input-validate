var expect  = require('chai').expect;
var testers = require('../index');

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