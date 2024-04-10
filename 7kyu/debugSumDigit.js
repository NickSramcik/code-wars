// Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

// Example
// 123  => 6
// 223  => 7
// 1337 => 14

// function getSumOfDigits(integer) {
//     var sum = null;
//     var digits =  Math.floor(integer).toString();
//     for(var ix = 1; ix < digits.length; ix = sum + 1) {
//       sum =+ digits[ix + 1]);
//     }
//     return sum;
// }

function getSumOfDigits(integer) {
    var sum = 0,
        digits =  Math.floor(integer).toString();

    for (var i = 0; i < digits.length; i++) {
        sum += +digits[i];
    }
    
    return sum;
}

// Refactored to arrow function

const getSumOfDigits = num => String(num).split('').reduce((a, c) => a + +c || 0, 0);
