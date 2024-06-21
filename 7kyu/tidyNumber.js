// Definition
// A Tidy number is a number whose digits are in non-decreasing order.

// Task
// Given a number, Find if it is Tidy or not.

// Pass in a number
// Return boolean

// Convert input into array of digits
// Loop through array
//      If any digit is less than previous, return false
// Return true

function tidyNumber(n) {
    const digits = [...String(n)];

    for (i = 1; i < digits.length; i++) {
        if (digits[i] < digits[i - 1]) return false;
    }

    return true;
}
