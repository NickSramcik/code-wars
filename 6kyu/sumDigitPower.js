// The number 89 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. 
// What's the use of saying "Eureka"? Because this sum gives the same number: 89 = 8 1 + 9 2 89=8 1 +9 2 
// The next number in having this property is 135 

// Task 
// We need a function to collect these numbers, that may receive two integers [a, b] that defines the range [a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// Examples 

// Let's see some cases (input -> output): 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9] 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89] If there are no numbers of this kind in the range [ � , � ] [a,b] the function should output an empty list. 90, 100 --> [] Enjoy it!!


// Pass in an array of 2 numbers, [a, b], representing an inclusive range
// Return an array of numbers in the range, whose digits to sequential powers equals the number
// 89 = 8^1 + 9^2
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

// Run a loop from a to b
// Convert current number to an array of digits
// Reduce that array. Add the current digit to the power of its index + 1
// If that reduced sum equals current number, push it to a result array
// Return the result array after the loop is finished

function sumDigPow(min, max) {
    let result = [];

    for (k = min; k <= max; k++) {
        const powerSum = k.toString().split('').reduce((a, c, i) => a + Number(c) ** (i + 1), 0);
        if (k === powerSum) {
            result.push(k);
        };
    };
    return result;
  };
  
// Breaking down into smaller functions and using a generator

function checkEureka(n) {
    return String(n).split('').map((e, i) => e ** (i + 1)).reduce((a, c) => a + c) === n;
};

function *range(min, max) {
    for (i = min; i <= max; i++) yield i;
};

function sumDigPow(a, b) {
    return Array.from(range(a, b)).filter(checkEureka);
};