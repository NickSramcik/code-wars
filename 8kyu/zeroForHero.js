// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

// Pass in an integer
// Return the integer with trailing zeroes removed
// 21210 -> 2121

// Convert number to an array of digits 
// Loop through the array backwards
// Replace 0s with '' until another number is found

function noBoringZeros(n) {
    let digits = [...String(n)];
    for (i = digits.length - 1; digits[i] == '0'; i--) {
        digits[i] = '';
    }return Number(digits.join(''));
}

// Divide the number by 10 until it is no longer divisible by 10, then return

function noBoringZeros(n) {
    while (n != 0 && n % 10 == 0) {
        n = n / 10;
    }return n;
}

// Refactored into recursive arrow function

const noBoringZeros = n => n != 0 && !(n % 10) ? noBoringZeros(n / 10) : n;