// Write a function that accepts a string, and returns true if it is in the form of a phone number.
// Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

// Only worry about the following format:
// (123) 456-7890 (don't forget the space after the close parentheses)

// Examples:

// "(123) 456-7890"  => true
// "(1111)555 2345"  => false
// "(098) 123 4567"  => false


// Pass in a string
// Return bool, whether it is a valid phone number or not
// '(503) 594-6969' - true

// Check that the non-number characters are present
// Check that each number slot is a number

function validPhoneNumber(phoneNumber){
    return (phoneNumber.length === 14 &&
            phoneNumber[0] === '(' &&
            phoneNumber[4] === ')' &&
            phoneNumber[5] === ' ' &&
            phoneNumber[9] === '-' &&
            phoneNumber.slice(1, 4) == Number(phoneNumber.slice(1, 4)) &&
            phoneNumber.slice(6, 9) == Number(phoneNumber.slice(6, 9)) &&
            phoneNumber.slice(10, 14) == Number(phoneNumber.slice(10, 14)));
}

// Refactored

function validPhoneNumber(str){
    return (str.length === 14 &&
            str.split('').filter(e => +e !== +e).join('') === '()-' &&
            str.split('').filter(e => +e == +e).length === 11);
}

// Using slices with the required format
// This one only works because the challenge's tests aren't very good

function validPhoneNumber(str) {
    const n1 = str.slice(1, 4),
          n2 = str.slice(6, 9),
          n3 = str.slice(10, 14);
    return `(${n1}) ${n2}-${n3}` === str;
}