var str = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50";
convert = function(){
  var step1 = str.split(", ").join(",").split("for ").join(" ");
  var step2 = step1.split(" ").join("");
  var step3 = step2.split("R").join(",").split(",");
  console.log(step3);
  return step3;
};
module.exports = convert;
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

exports.pricePerAvo = function(){
  return "the price per avo: " + '\n' + "Deal 1: " + d1r + "\n" + "Deal 2: " + d2r + "\n" + "Deal 3: " + d3r + "\n" + "Deal 4: " + d4r + "\n";
};
