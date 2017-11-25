const PRICE_OF_ONE_PHONE = 200;
const PRICE_OF_ONE_ACCESSORY = 10;
const TAX_RATE = 0.15;

var moneyInMyBank = 3000;
var totalPrice = PRICE_OF_ONE_PHONE + PRICE_OF_ONE_ACCESSORY;
var numberOfPhones = 0;

while (moneyInMyBank > 0) {
  numberOfPhones++;
  moneyInMyBank = moneyInMyBank - totalPrice;
}

function taxAdder(countedPrice) {
  return countedPrice + countedPrice * TAX_RATE;
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
