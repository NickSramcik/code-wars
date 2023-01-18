// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,

// 5! = 5 * 4 * 3 * 2 * 1 = 120.

// The value of 0! is 1.

// #Your task

// You have to create the function factorial that receives n and returns n!. You have to use recursion.


// Pass in a positive integer n
// Return a number -> n factorial using a recursive function
// 5 -> 120

// Check that n > 1 and return the product of n and a recurse of n - 1

const factorialOld = n => {
    if (n > 1) {
        return n * factorialOld(n - 1);
    }else return 1;
  };

// Refactored 

const factorial = n => n > 1 ? n * factorial(--n) : 1;