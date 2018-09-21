var expect  = require('chai').expect;
var testers = require('../index');

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