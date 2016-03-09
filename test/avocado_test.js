var assert = require('assert');
var functions = require('../avocado');

describe("convert",function(){
  it("should convert the string into an array and remove unneeded characters", function(){
    var result = convert();
    assert.deepEqual(result,["1","3","2","7","3","10","5","14.50"]);
  });
});
describe("pricePerAvo", function(){
  it("should return the price of one avo in each deal", function(){
    var result = functions.pricePerAvo();
    assert.equal(result,"the price per avo: \n Deal 1 costs: R3.00 \n Deal 2 costs: R3.50 \n Deal 3 costs: R3.33 \n Deal 4 costs: R2.90");
  });
});
