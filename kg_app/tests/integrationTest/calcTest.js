var chai = require("chai");
var calc = require("../../public/javascripts/calculator.js").calculator
var assert = chai.assert;

describe("calculator", function () {

    describe("#calculator functionality integration", function () {

        it('should return 2 when multiply 3 to 4 and then divide by 6', function () {
            multiplyOfThreeAndFour = calc.multiply(3,4);
            resultAfterDivedingBySix = calc.divide(multiplyOfThreeAndFour,6);
            assert.equal(resultAfterDivedingBySix,2);
        });

        it('should return 10 when multiply 3 to 4 and then add 6 and then minus 8', function () {
            multiplyOfThreeAndFour = calc.multiply(3,4);
            addSixToTheMultiplyResult = calc.add(multiplyOfThreeAndFour,6);
            resultAfterSubtractingEight = calc.subtract(addSixToTheMultiplyResult,8);
            assert.equal(resultAfterSubtractingEight,10);
        });

    });
});
