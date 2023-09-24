// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

// years divisible by 4 are leap years
// but years divisible by 100 are not leap years
// but years divisible by 400 are leap years
// Additional Notes:

// Only valid years (positive integers) will be tested, so you don't have to validate them
// Examples can be found in the test fixture.

// Pass in a positive integer
// Return boolean, whether the year is a leap year or not
// 2000 -> true

// Check if input is divisible by 4 AND not divisible by 100, or divisibile by 400

function isLeapYear(year) {
    return (!(year % 4) && (!!(year % 100) || !(year % 400)));
  }

// One line

const isLeapYear = y => !(y % 4) && (!!(y % 100) || !(y % 400));

// Check through conditions by priority

function isLeapYear(year) {
    if (year % 400 == 0) return true;
    if (year % 100 == 0) return false;
    if (year % 4 == 0) return true;
    return false;
}

// Using turnaries
// If input is divisible by given number, the modulus will be 0, or falsey
// If input % 4 is truthy, return false. If falsey, continue
// If input % 100 is truthy, return true. If falsey, continue
// If input % 400 is truthy, return false. If falsey, return true. 

const isLeapYear = year => year % 4 ? false : year % 100 ? true : year % 400 ? false : true;