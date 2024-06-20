// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3.

// Note that the number will always be non-negative (>= 0).

// Pass in a number
// Return a string

// Declare a simple boolean function that checks if a number is odd
// Spread input num into a result array of digits
// Map the result array to add dashes if current and next digit are odd
// Join result array into a string and return it

const isOdd = num => num % 2 == 1;

function insertDash(num) {
    const result = [...String(num)];
    return result.map((digit, i) => isOdd(digit) && isOdd(result[i + 1]) ? digit + '-' : digit).join('');
}
 
// Refactored for better readability

function insertDash(num) {
    const result = [];
    num = String(num);
    
    for (let i in num) {
        const current = num[i],
              next = num[+i + 1];

        if (isOdd(current) && isOdd(next)) {
            result.push(current + '-') ;
        }
        else {
            result.push(current);
        }
    }

    return result.join('');
}
