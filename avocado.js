var str = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50";
convert = function(){
  var step1 = str.split(", ").join(",").split("for ").join(" ");
  var step2 = step1.split(" ").join("");
  var step3 = step2.split("R").join(",").split(",");
  console.log(step3);
  return step3;
};
var priceIndex = convert();

var quantity = [priceIndex[0], priceIndex[2], priceIndex[4], priceIndex[6]];
var price = [priceIndex[1], priceIndex[3], priceIndex[5], priceIndex[7]];

var Deal1 = price[0] / quantity[0];
var d1r = Deal1.toFixed(2);
var Deal2 = price[1] / quantity[1];
var d2r = Deal2.toFixed(2);
var Deal3 = price[2] / quantity[2];
var d3r = Deal3.toFixed(2);
var Deal4 = price[3] / quantity[3];
var d4r = Deal4.toFixed(2);

pricePerAvo = function(){
  return "the price per avo: " + '\n' + "Deal 1: " + d1r + "\n" + "Deal 2: " + d2r + "\n" + "Deal 3: " + d3r + "\n" + "Deal 4: " + d4r + "\n";
};
var singlePrices = [Deal1, Deal2, Deal3, Deal4];
cheapest = function() {
  var arr = singlePrices;
  var min = Math.min.apply(Math, arr).toFixed(2);
  return "Cheapest deal: " + min;
};
expensive = function() {
  var arr = singlePrices;
  var max = Math.max.apply(Math, arr).toFixed(2);
  return "Most expensive deal: " + max;
};
average = function() {
  var arr = singlePrices;
  var average = (singlePrices[0] + singlePrices[1] + singlePrices[2] + singlePrices[3]) / 4;
  return "The average price is: " + average.toFixed(2);
};
module.exports = pricePerAvo;
module.exports = convert;
module.exports = cheapest;
module.exports = expensive;
module.exports = average;
