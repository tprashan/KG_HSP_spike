var chai = require("chai");
var calc = require("../../public/javascripts/calculator.js").calculator
var assert = chai.assert;

describe("calculator", function () {

    describe("#calculator functionality", function () {

        it('should add 6 and 7 and return 13', function () {
            result = calc.add(6,7);
            assert.equal(result,13);
        });

        it('should add 16 and 17 and return 33', function () {
            result = calc.add(16,17);
            assert.equal(result,33);
        });

        it('should subtract 17 from 20 and return 3', function () {
            result = calc.subtract(20,17);
            assert.equal(result,3);
        });

        it('should multiply 5 to 4 and return 20', function () {
            result = calc.multiply(5,4);
            assert.equal(result,20);
        });

        it('should divide 25 to 5 and return 5', function () {
            result = calc.divide(25,5);
            assert.equal(result,5);
        });

        it('should divide 35 to 5 and return 5', function () {
            result = calc.divide(35,5);
            assert.equal(result,7);
        });

        it('should divide 250 to 5 and return 50', function () {
            result = calc.divide(250,5);
            assert.equal(result,50);
        });

        it('should divide 135 to 5 and return 27', function () {
            result = calc.divide(135,5);
            assert.equal(result,27);
        });
    });
});
