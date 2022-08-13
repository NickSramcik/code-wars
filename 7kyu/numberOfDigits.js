// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.

// Pass in a positive integer
// Return how many digits the input has
// 3430 -> 4

// Convert number to string and return the length

const digits = n => n.toString().length;

// Shorter

const digits = n => (n+'').length;

// Another

const digits = n => String(n).length;