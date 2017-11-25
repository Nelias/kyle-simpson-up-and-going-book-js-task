var moneyInMyBank = 3000;
var priceOfOnePhone = 200;
var priceOfOneAccessory = 10;
var taxRate = 0.15;
var totalPrice = priceOfOnePhone + priceOfOneAccessory;
var numberOfPhones = 0;

while (moneyInMyBank > 0) {
  numberOfPhones++;
  moneyInMyBank = moneyInMyBank - totalPrice;
}

function taxAdder(countedPrice) {
  return countedPrice + countedPrice * taxRate;
}

var amountAfterTax = taxAdder(numberOfPhones * totalPrice);

function isAbleToAfford() {
  if (amountAfterTax > moneyInMyBank) {
    return "You can't afford this price: ";
  }
  if (amountAfterTax < moneyInMyBank) {
    return "You can afford this price: ";
  }
}

function americanize(countedPrice) {
  return "$" + countedPrice.toFixed(2);
}

console.log(isAbleToAfford() + americanize(amountAfterTax));
