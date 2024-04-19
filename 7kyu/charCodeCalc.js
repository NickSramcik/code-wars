// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 7 + 6 + 6 + 7)
// - (6 + 5 + 1 + 6 + 6 + 1)
// -------------------------
//                        6

// Pass in a string
// Return a number

// Convert input string to array
// Map the array, convert each element into its char code, reduce a sum of the numbers
// Store that into total1
// Declare total 2, convert to array, map it & change 7s to 1s
// Subtract total2 - total1, return result

function calcOld(str) {
    let total1 = str.split('').map(char => char.charCodeAt(0)).join('');
    const total2 = String(total1).split('').map(num => num == 7 ? 1 : num).reduce((acc, cur) => acc + Number(cur), 0);
    total1 = total1.split('').reduce((acc, cur) => acc + Number(cur), 0);

    return total1 - total2;
}

// Refactored

// Convert input into char codes & store into variable
// Set total 1 to a reduced sum of character codes
// Convert 7s to 1s in char codes, then set total 2 to reduced sum
// Subtract the difference and return 

function sum(arr) {
    return arr.reduce((acc, cur) => acc + Number(cur), 0);
}

function calcShrek(str) {
    let charCodes = str.split('').map(char => char.charCodeAt(0)).join('');
    const total1 = sum(charCodes.split(''));
    const total2 = sum(charCodes.split('').map(num => num == 7 ? 1 : num));

    return total1 - total2;
}

function calc(str) {
    return [...str]
           .map(e => e.charCodeAt(0))
           .join('').split('')
           .filter(n => n == '7')
           .length * 6;
}

// Test Cases

console.log(calc('abcdef'), 6);
console.log(calc('ifkhchlhfd'), 6);
console.log(calc('jfmgklf8hglbe'), 6);
console.log(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'), 96);
