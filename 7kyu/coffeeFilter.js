// You love coffee and want to know what beans you can afford to buy it.

// The first argument to your search function will be a number which represents your budget.

// The second argument will be an array of coffee bean prices.

// Your 'search' function should return the stores that sell coffee within your budget.

// The search function should return a string of prices for the coffees beans you can afford. The prices in this string are to be sorted in ascending order.

// Pass in a number (budget) and an array (prices)
// Return a string

// Filter the prices array for numbers less than budget
// Sort the array from low to high
// Join the result with ',' separator and return

function search(budget, prices) {
    return prices.filter(price => price <= budget).sort((a, b) => a - b).join(',');
}
