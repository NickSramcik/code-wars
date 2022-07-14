// Your task is to write function findSum.

// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// For example:

// findSum(5) should return 8 (3 + 5)

// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)


// Pass in a positive integer n
// Return the sum of all multiples of 3 & 5 from 1 to n
// 33 -> 3 + 5 + 6 + 9 + 10 = 33

// Run a loop for n interations. For each number, if it's a multiple of 3 or 5, add it to an accumulator. 


function findSum(n) {
    var acc = 0;
    for (i = 1; i <= n; i++) {
        if (!(i % 3) || !(i % 5)) {
            acc += i;
        }
    }return acc;
  }

// Using array methods
// .keys() method returns property names, in the case of this array: each element's id, which is an easy way to get a sequential array
// Reduce that array to basically do what the above loop is doing

const findSum = n => [...Array(n+1).keys()].reduce((a, c) => !(c % 5) || !(c % 3) ? a + c : a, 0); 