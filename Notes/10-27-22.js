// This file contains notes from the workshop on JavaScript & Node.js on Thu Oct 27, 2022

/* -------------------------------------------------------------------------- */

/*
Group Activity 1

In your group, write a function that takes in a list of prices and a discount 
rate. Return a list of prices with the discount rate applied!
*/

function discount(priceList, discountRate) {
  for(let i = 0; i < priceList.length; i++) {
    priceList[i] *= (1 - discountRate);
  }
  return priceList;
}

// testing
let prices = [10, 20, 30, 40, 50];
let discountRate = 0.75;
let discountedPrices = discount(prices, discountRate);
for(let i = 0; i < discountedPrices.length; i++) {
  console.log(discountedPrices[i]);
}

/* -------------------------------------------------------------------------- */

/*
Group Activity 2

In your group, write an object related to our finance tracker. Include the 
name, cost, method of payment, location, and at least one attribute of your 
own. Use any description you want for your purchase! Be prepared to share.
*/

const Purchase = {
  name : 'yogurt',
  cost : 9.75,
  methodOfPayment : 'Chase Freedom Unlimited',
  location : 'UCSD Target',
  necessary : true
}

/* -------------------------------------------------------------------------- */

function evolveMe (candy) {
  if (candy > 20) {
      return 'evolve';
}
else {
  return 'more candy';
}
}

// ternary operator example
evolveMe = (candy) => {return (candy > 20) ? "evolve": "more candy"};

/*
Group Activity 3

In your group, write an arrow function that takes in your name and prints out 
your favorite class.
*/

favClass = (name) => {return (name == "Vivian") ? "MATH 31AH": "CSE 11"};
favoriteClass = (name) => {console.log((name == "Vivian") ? "MATH 31AH": "CSE 11")};

// testing
console.log(favClass("Vivian"));
console.log(favClass("Stuart"));
favoriteClass("Vivian");
favoriteClass("Stuart");
