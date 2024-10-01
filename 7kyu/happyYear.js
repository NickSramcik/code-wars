// Happy Year is the year with only distinct digits , (e.g) 2018

// Task
// Given a year, Find The next happy year or The closest year You'll see your best friend!alt!alt

// Notes
// Year Of Course always Positive .
// Have no fear , It is guaranteed that the answer exists .
// It's not necessary that the year passed to the function is Happy one .
// Input Year with in range (1000  ≤  y  ≤  9000)
// Input >> Output Examples:
// nextHappyYear (7712) ==> return (7801)
// Explanation:
// As the Next closest year with only distinct digits is 7801 .

// nextHappyYear (8989) ==> return (9012)
// Explanation:
// As the Next closest year with only distinct digits is 9012 .

// nextHappyYear (1001) ==> return (1023)
// Explanation:
// As the Next closest year with only distinct digits is 1023 .

// Pass in a number
// Return a number

// Helper function: isHappy()
// Take in a number, return boolean
// Convert number to string and split into array of digits
// Loop through array and return whether every digit is unique

// while year !isHappy:
//  increment year
// Return year

function isHappy(year) {
    year = year.toString().split('');
    return year.every((digit, i) => year.indexOf(digit) == year.lastIndexOf(digit));
}

function nextHappyYear(year) {
    year++
    while (!isHappy(year)) year++;
    return year;
}

// Test Cases

console.log(isHappy(1234), ' -> ', true);
console.log(isHappy(1233), ' -> ', false);
console.log(nextHappyYear(7712), ' -> ', 7801);
console.log(nextHappyYear(2001), ' -> ', 2013);
console.log(nextHappyYear(1233), ' -> ', 1234);
