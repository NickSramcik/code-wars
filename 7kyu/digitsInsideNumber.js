// search all numbers from inclusive 1 to inclusive a given number x, that have the given digit d in it.
// The value of d will always be 0 - 9.
// The value of x will always be greater than 0.

// You have to return as an array

// the count of these numbers,
// their sum
// and their product.

// For example:
// x = 11
// d = 1
// ->
// Numbers: 1, 10, 11
// Return: [3, 22, 110]

// If there are no numbers, which include the digit, return [0,0,0].

// Pass in 2 numbers, x and d
// Return an array, length 3

// Let numbers be an empty array
// Loop from 1 to x
//   Convert i to string 
//   if i contains d, push it to numbers in number form
// Let count be numbers.length
// Let sum be a reduced sum of all numbers
// Let product be a reduced product of all numbers
// If count is 0, return [0, 0, 0]
// Return [count, sum, product]

function numbersWithDigitInside(x, d) {
    const numbers = [];

    for (i = 1; i <= x; i++) {
        const current = i.toString();
        if (current.includes(d)) numbers.push(i);
    }

    const count = numbers.length;
    const sum = numbers.reduce((a, c) => a + c, 0);
    const product = numbers.reduce((a, c) => a * c, 1);

    return count ? [count, sum, product] : [0, 0, 0];
}
