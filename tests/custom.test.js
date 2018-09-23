var expect  = require('chai').expect;
var customOr = require('../index').customOr;
/*
allows = { // Optional
    alphabets: {
       uppercase: true, // default
       lowercase: true  // default
    },
    numbers: {
       range: '0-9' // default
    },
    spaces: true,    // default
    symbols: '-_,.', // default, exapmle: '-_,' 
    str_length: {
        min: 1,  // default
        max: ""  // default
    } 
}
*/
describe("Testing customOr configurable test function", function(){

    it("should return FALSE - customOr('abcABC 123', {spaces: false})", function(){
        expect(customOr('abcABC 123', {spaces: false})).to.be.false;
    });
    it("should return TRUE - customOr('abcABC123', {spaces: false})", function(){
        expect(customOr('abcABC123', {spaces: false})).to.be.true;
    });

    it("should return FALSE - customOr('abc123', { alphabets: false, space: false }) - No uppercase, no space", function(){
        expect(customOr('abc123', { alphabets: false, space: false })).to.be.false;
    });
    it("should return TRUE - customOr('abcABC123', { alphabets: true, space: false }) - No uppercase, no space", function(){
        expect(customOr('abcABC123', { space: false })).to.be.true;
    });
    it("should return FALSE - customOr('abcABC123', { alphabets: { uppercase: false, }, space: false }) - No uppercase, no space", function(){
        expect(customOr('abcABC123', { alphabets: { lowercase: true, uppercase: false, }, space: false })).to.be.false;
    });
    it("should return FALSE - customOr('abcABC123', { alphabets: { lowercase: false, }, space: false }) - No lowercase, no space", function(){
        expect(customOr('abcABC123', { alphabets: { lowercase: false, uppercase: true}, space: false })).to.be.false;
    });
    it("should return TRUE - customOr('ABC123', { alphabets: { lowercase: false, }, space: false }) - No lowercase, no space", function(){
        expect(customOr('ABC123', { alphabets: { lowercase: false, uppercase: true}, space: false })).to.be.true;
    });
    it("should return TRUE - customOr('ABC123', { alphabets: { lowercase: false, }, space: false }) - No lowercase, no space", function(){
        expect(customOr('ABC123', { alphabets: { lowercase: false, uppercase: true}, space: false })).to.be.true;
    });

    it("should return FALSE - customOr('ABC@123') - symbols not configured", function(){
        expect(customOr('ABC@123')).to.be.false;
    });
    it("should return TRUE - customOr('ABC@123', {symbols: '@'}) - symbols @ configured", function(){
        expect(customOr('ABC@123', {symbols: '@'})).to.be.true;
    });
    it("should return TRUE - customOr('ABC@123', {symbols: '@$'}) - symbols @ and $ configured", function(){
        expect(customOr('ABC$123', {symbols: '@$'})).to.be.true;
    });
    it("should return TRUE - customOr('\"ABC\"123', {symbols: '\"'}) - symbols \" is configured, (use escape char or not)", function(){
        expect(customOr('"ABC"123', {symbols: '"'})).to.be.true;
    });

    it("should return FALSE - customOr('123', {minlength: 4}) - symbols not configured", function(){
        expect(customOr('123', {minlength: 4})).to.be.false;
    });
    it("should return TRUE - customOr('12345', {minlength: 4}) - symbols not configured", function(){
        expect(customOr('12345', {minlength: 4})).to.be.true;
    });
    it("should return FALSE - customOr('123456', {minlength: 4, maxlength: 5}) - symbols not configured", function(){
        expect(customOr('123456', {minlength: 4, maxlength: 5})).to.be.false;
    });
    it("should return TRUE - customOr('123456', {minlength: 4, maxlength: 5}) - symbols not configured", function(){
        expect(customOr('12345', {minlength: 4, maxlength: 5})).to.be.true;
    });
    // it("should return FALSE - customOr('12345', {maxlength:4}) - symbols not configured", function(){
    //     expect(customOr('123456', {maxlength:4})).to.be.false;
    // });
})