// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// Valid inputs examples:
// Examples of valid inputs:
// 1.2.3.4
// 123.45.67.89
// Invalid input examples:
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089
// Notes:
// Leading zeros (e.g. 01.02.03.04) are considered invalid
// Inputs are guaranteed to be a single string

// Pass in a string of an IP address
// Return boolean, whether the IP is valid
// '1.2.3.4' -> true

// Return false if:
//      The input is falsey
//      The string split into an array ( '.' separator) has a length != 4
//      Any values of that array have more than 1 digit with the first being 0
//      Any of the values are not between 0 and 255
//      The string includes spaces, 'e', or '\n'
// Return true if none of those checks fire

function isValidIP(str) {
    if (!str) return false;
    const arr = str.split('.');
    if (arr.length !== 4) return false;
    if (arr.some(num => num.length > 1 && num[0] == 0)) return false;
    if (!arr.every(num => num >= 0 && num <= 255)) return false;
    if (arr.some(e => !e)) return false;
    if (str.includes('e') || str.includes('\n') || str.includes(' ')) return false;
    return true;
}

// Refactored using reduce

function isValidIP(str) {
    const octets = str.split('.');
    return octets.length == 4 && 
           octets.reduce((acc, octet) => 
                acc == true &&
                String(Number(octet)) == octet &&
                Number(octet) >= 0 &&
                Number(octet) <= 255
                , true)
}

// Refactored using net IPv4 validator

const isValidIP = require('net').isIPv4;
