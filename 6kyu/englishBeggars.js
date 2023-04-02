// Born a misinterpretation of this kata, your task here is pretty simple: given an array of values and an amount of beggars, you are supposed to return an array with the sum of what each beggar brings home, assuming they all take regular turns, from the first to the last.

// For example: [1,2,3,4,5] for 2 beggars will return a result of [9,6], as the first one takes [1,3,5], the second collects [2,4].

// The same array with 3 beggars would have in turn have produced a better out come for the second beggar: [5,7,3], as they will respectively take [1,4], [2,5] and [3].

// Also note that not all beggars have to take the same amount of "offers", meaning that the length of the array is not necessarily a multiple of n; length can be even shorter, in which case the last beggars will of course take nothing (0).

// Note: in case you don't get why this kata is about English beggars, then you are not familiar on how religiously queues are taken in the kingdom ;)

// Note 2: do not modify the input array.

// Pass in an array, and a positive integer n
// Return an array of numbers, length equaling n
// [1, 2, 3, 4, 5], 2 -> [9, 6]

// Store a result array, and a beggar counter
// Loop through the input array
// Add current value to result array, index corresponding to beggar counter
// Increment begger counter, then reset to 0 if it's equal to n
// Return result array

// Check that n is truthy before adding to array, so we produce an empty array if n is 0

function beggars(values, n) {
    let result = Array(n).fill(0),
        beggar = 0;

    for (value of values) {
        if (n) result[beggar] += value;
        beggar++;
        if (beggar == n) beggar = 0;
    }

    return result;
}

// Refactored using modulus

function beggars(values, n) {
    let result = Array(n).fill(0);

    for (i = 0; i < values.length; i++) {
        result[i % n] += values[i];
    }

    return result;
}

// Refactored into single line arrow function using reduce

const beggars = (v, n) => v.reduce((a, c, i) => {a[i % n] += c; return a}, Array(n).fill(0));
