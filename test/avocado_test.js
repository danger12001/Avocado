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
    var result = pricePerAvo();
    assert.equal(result,"the price per avo: \nDeal 1: 3.00\nDeal 2: 3.50\nDeal 3: 3.33\nDeal 4: 2.90\n");
  });
});
describe("cheapest", function(){
  it("should return the cheapest deal", function(){
      var result = cheapest();
      assert.equal(result, "Cheapest deal: 2.90");
  });
});
describe("expensive", function(){
  it("should return the most expensive deal", function(){
      var result = expensive();
      assert.equal(result, "Most expensive deal: 3.50");
  });
});
describe("average", function(){
  it("should return the average of the deals", function(){
      var result = average();
      assert.equal(result, "The average price is: 3.18");
  });
});
