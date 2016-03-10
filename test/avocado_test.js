var assert = require('assert');
var functions = require('../avocado');

describe("convert",function(){
  it("should convert the string into an array and remove unneeded characters", function(){
    var result = functions.convert("1 for R3, 2 for R7, 3 for R10, 5 for R14.50");
    assert.deepEqual(result,["1","3","2","7","3","10","5","14.50"]);
  });
});
describe("pricePerAvo", function(){
  it("should return the price of one avo in each deal", function(){
    var result = functions.pricePerAvo(priceIndex);
    assert.deepEqual(result,["3.00","3.50","3.33","2.90"]);
  });
});
describe("cheapest", function(){
  it("should return the cheapest deal", function(){
      var result = functions.cheapest([ '3.00', '3.50', '3.33', '2.90' ]);
      assert.equal(result, "Cheapest deal: 2.90");
  });
});
describe("expensive", function(){
  it("should return the most expensive deal", function(){
      var result = functions.expensive([ '3.00', '3.50', '3.33', '2.90' ]);
      assert.equal(result, "Most expensive deal: 3.50");
  });
});
describe("average", function(){
  it("should return the average of the deals", function(){
      var result = functions.average([ '3.00', '3.50', '3.33', '2.90' ]);
      assert.equal(result, "The average price is: 3.18");
  });
});
