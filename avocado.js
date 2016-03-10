exports.convert = function(str) {
  var step1 = str.split(", ").join(",").split("for ").join(" ");
  var step2 = step1.split(" ").join("");
  var step3 = step2.split("R").join(",").split(",");
  priceIndex = step3;
  console.log(priceIndex);
  return priceIndex;
};

exports.pricePerAvo = function(priceIndex) {
  var data = [];
  var price = [];
  var quantity = [];
  for (x = 0; x < priceIndex.length; x++) {
    if (x % 2 === 0) {
      var priceVal = parseFloat(priceIndex[x + 1]);
      data.push({
        quantity: priceIndex[x],
        price: priceVal.toFixed(2)
      });
    }
  }
  for (y = 0; y < data.length; y++) {
    quantity.push(data[y].quantity);
    price.push(data[y].price);
  }
  console.log(quantity);
  console.log(price);
  var singlePrices = [];
  for (z = 0; z < quantity.length; z++) {
    singlePrices.push(price[z] / quantity[z]);
    // singlePrices.toFixed(2);
  }
  // parseFloat(singlePrices);
  console.log('shit i logged', data);
return singlePrices;
};
exports.cheapest = function(singlePrices) {
  var min = Math.min.apply(Math, singlePrices).toFixed(2);
  return "Cheapest deal: " + min;
};
exports.expensive = function(singlePrices) {
  var max = Math.max.apply(Math, singlePrices).toFixed(2);
  return "Most expensive deal: " + max;
};
exports.average = function(singlePrices) {
  singlePrices.join(',');
  var ave = (parseFloat(singlePrices[0]) + parseFloat(singlePrices[1]) + parseFloat(singlePrices[2]) + parseFloat(singlePrices[3])) / 4;
  return "The average price is: " + ave.toFixed(2);
};
