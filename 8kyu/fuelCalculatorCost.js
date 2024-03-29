// In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

// Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

// Good Luck!

// Note
// 1 Dollar = 100 Cents

// Pass in 2 numbers
// Return a number

// Determine discount by taking minumum of 25 and litres / 2 * 5
// Multiply price * litres - liters * discount and return

function fuelPrice(litres, pricePerLitre) {
    const discount = Math.min(Math.floor(litres / 2) * 5, 25) * .01,
          cost = pricePerLitre * litres - litres * discount;
    return +cost.toFixed(2);
}

// Test Cases

console.log(fuelPrice(5, 1.23), 5.65);
console.log(fuelPrice(8, 2.5), 18.40);
console.log(fuelPrice(5, 5.6), 27.50);
