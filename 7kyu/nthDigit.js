// Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

// Note
// If num is negative, ignore its sign and treat it as a positive value
// If nth is not positive, return -1
// Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0
// Examples(num, nth --> output)
// 5673, 4 --> 5
// 129, 2 --> 2
// -2825, 3 --> 8
// -456, 4 --> 0
// 0, 20 --> 0
// 65, 0 --> -1
// 24, -8 --> -1


// Pass in 2 integers, number and n
// Return the nth digit of the input number, from right to left
// 42, 3 -> 042 -> 0

var findDigit = function(num, n){
    // If n < 1 return -1
    if (n < 1) return -1;
    // Convert the number to an array, and filter out non numbers
    let arr = String(num).split('').filter(e => Number(e) == e);
    // Reverse the array and pad it to equal the length of n
    arr = arr.reverse().join('').padEnd(n, '0');
    // Return the nth element
    return Number(arr[n - 1]);
}

// Refactored

function findDigit(num, n) {
    if (n < 1) return -1;
    num = String(num).split('').filter(e => Number(e) == e).reverse().join('').padEnd(n, '0');
    return Number(num[n - 1]);
}

// Refactored into one line arrow function

const findDigit = (num, n) => n < 1 ? -1 : +[...''+Math.abs(num)].reverse()[--n] || 0;