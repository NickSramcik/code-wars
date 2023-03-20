// Given a variable n,

// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return the string "NaN".

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

// Pass in a number 
// Return a string, the number with hyphens before and after each odd integer
// 1224562 -> '1-224-5-62'

// Return NaN if input is not a number
// Declare an empty result string
// Convert number to string and loop through it (also make it positive)
// If previous char in result string is an odd number, add a hyphen
// Add current num to result string
// If next num in char is odd, add a hyphen
// Return finished result string

function dashatize(num) {
    if (Number.isNaN(num)) return 'NaN';
    let result = '';
    num = String(Math.abs(num));

    for (i = 0; i < num.length; i++) {
        if (result.slice(-1) % 2 === 1) result += '-';
        result += num[i];
        if (num[i + 1] % 2 === 1) result += '-'; 
    };
    return result;
};

// Refactored
// Map the numbers for even/odd, wrap the odds with hyphens
// Join and resplit that array and filter out empty strings to trim hyphens on the end
// Rejoin with hyphens and return

const dashatize = n => [...String(n)].map(e => e % 2 ? `-${e}-` : e).join('').split('-').filter(e => e).join('-');