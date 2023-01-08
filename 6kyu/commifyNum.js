// Finish the solution so that it takes an input n (integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.

// Assume: 0 <= n < 2147483647

// Examples
//        1  ->           "1"
//       10  ->          "10"
//      100  ->         "100"
//     1000  ->       "1,000"
//    10000  ->      "10,000"
//   100000  ->     "100,000"
//  1000000  ->   "1,000,000"
// 35235235  ->  "35,235,235"

// Pass in an integer n
// Return a string of n with commas for every third digit 
// 12345 -> '12,345'

// Convert string to array, reverse and map it 
// If i is a multiple of 3, change element to ',' + e
// Reverse again, join back into string and return

function groupByCommas(n) {
    return [...String(n)].reverse().map((e, i) => i > 0 && !(i % 3) ? e + ',' : e).reverse().join('');
}

// Using toLocaleString method

const groupByCommas = n => n.toLocaleString();