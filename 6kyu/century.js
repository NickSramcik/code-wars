// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

// Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"

// Pass in a 4 digit positive integer representing a year
// Return a string, the century the input year is in
// 2023 -> '21st'

// Take the first two digits and add 1. Remove trailing zeros. 
// Check the last digit to determine what suffix to add
// Return result

function whatCentury(year) {
  let century = Number(year.toString().slice(0, 2)) + 1;
  if (year.toString().slice(-2) == '00') century -= 1;
  century = String(century);
  
  if (century > 10 && century < 20) {
    return century + 'th';
  }switch (century.slice(-1)) {
    default: century += 'th'; break;
    case '1': century += 'st'; break;
    case '2': century += 'nd'; break;
    case '3': century += 'rd'; break;
  }return century;
}

// Refactored using Math.ceil() and remainder

function whatCentury(year) {
    let century = Math.ceil(year / 100);
    if (century > 10 && century < 20) return century + 'th';
    switch (century % 10) {
        default: return century + 'th';
        case 1: return century + 'st';
        case 2: return century + 'nd';
        case 3: return century + 'rd';
    };
}

// Refactored into single line arrow function

const whatCentury = (y, c = Math.ceil(y / 100)) => c + (c < 20 ? 'th' : ['th', 'st', 'nd', 'rd'][c % 10] || 'th');