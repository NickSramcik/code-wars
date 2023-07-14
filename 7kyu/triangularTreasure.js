// Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.
console.log("🔥".repeat(102))
// 1st (1)   2nd (3)    3rd (6)  4th (10)
// *          **        ***      ****
//            *         **       ***
//                      *        **
//                               *
// You need to return the nth triangular number. You should return 0 for out of range values:

// For example: (Input --> Output)

// 0 --> 0
// 2 --> 3
// 3 --> 6
// -10 --> 0


// Pass in an integer (n)
// Return another integer

// If input < 0, return 0 
// Store a result counter variable (number)
// Run a loop, start at 1, end at n
//   Add index to the counter
// Return the count

// function triangleTreasure(n) {
//   if (n <= 0) return 0;
//   let count = 0;

//   for (i = 1; i <= n; i++) {
//     count += i;
//   }

//   return count
// }

// n (min + max) / 2

// Return formula as written above

// const triangleTreasure = n => n <= 0 ? 0 : ( n * (1 + n) ) / 2;

// const triangleTreasure = n => {
//   if (n <= 0) return 0;
//   return ( n * (1 + n) ) / 2;
// }

// ternary expression
// conditional ? {true action} : {false action}

function triangleTreasure(n) {
  if (n > 0) return n + triangleTreasure(n - 1);
  return 0;
}

console.log(triangleTreasure(0), '-> 0')
console.log(triangleTreasure(2), '-> 3')
console.log(triangleTreasure(3), '-> 6')
console.log(triangleTreasure(-10), '-> 😍')
