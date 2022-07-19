// Return the type of the sum of the two arguments

// Pass in two arguments
// Return the type the sum of the inputs would be
// 5, 'shrek' -> 'string'

// Use the typeof operator

function typeOfSum(a, b) {
    return typeof (a + b);
  }

// One liner

const typeOfSum = (a, b) => typeof (a + b);

// Most other methods of checking type don't work because of weird edge cases with empty/null/etc values