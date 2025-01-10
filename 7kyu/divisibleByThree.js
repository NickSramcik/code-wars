// A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

// Given a series of digits as a string, determine if the number represented by the string is divisible by three.

// Example:

// "123"      -> true
// "8409"     -> true
// "100853"   -> false
// "33333333" -> true
// "7"        -> false
// Try to avoid using the % (modulo) operator.

// Pass in a string
// Return boolean

// Helper function: sumDigits
// Pass in a string and return a string
// Reduce the sum of digits and return result

// While digits length is more than 1, sumDigits it
// Return if result is 3, 6, or 9

function sumDigits(digits) {
    return digits.split('').reduce((a, c) => a + Number(c), 0).toString();
}

function divisibleByThree(digits){
    while (digits.length > 1) {
        digits = sumDigits(digits);
    }

    return digits == 3 || digits == 6 || digits == 9;
}
