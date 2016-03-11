exports.convert = function(str) {
  var step1 = str.split(", ").join(",").split("for ").join(" ");
  var step2 = step1.split(" ").join("");
  var step3 = step2.split("R").join(",").split(",");
console.log(step3);
  priceIndex = step3;
  return priceIndex;
};

exports.pricePerAvo = function(priceIndex) {
  var data = [];
  for (x = 0; x < priceIndex.length; x++) {
    if (x % 2 === 0) {
      var quantityVal = parseFloat(priceIndex[x]).toFixed(2);
      var priceVal = parseFloat(priceIndex[x + 1]).toFixed(2);
      data.push({
        quantity: Number(quantityVal),
        price: Number(priceVal)
      });
    }
  }
  var singlePrices = [];
  var quantity = [];
  var price = [];
  for (y = 0; y < data.length; y++) {
    parseFloat(data.quantity);
    parseFloat(data.price);
    quantity.push(data[y].quantity);
    price.push(data[y].price);
  }
  for (z = 0; z < quantity.length; z++) {
    var calc = price[z]/quantity[z];
    var decimals = calc.toFixed(2);
    var toNumber = Number(decimals);
    singlePrices.push(toNumber);
  }
  singlePrices.join(",").split(",");
  sp = singlePrices;
  return sp;

};
exports.cheapest = function(sp) {
  var min = Math.min.apply(Math, sp ).toFixed(2);
  return "Cheapest deal: " + min;
};
exports.expensive = function(sp) {
  var max = Math.max.apply(Math, sp).toFixed(2);
  return "Most expensive deal: " + max;
};
exports.average = function(sp) {
  for(x = 0;x<sp.length;x++){
    var sum = sp.reduce(function(a,b) {return a+b;});
    var ave = sum / sp.length;
    return "The average price is: " + ave.toFixed(2);
  }
};
