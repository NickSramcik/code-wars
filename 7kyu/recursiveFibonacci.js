// ##2 - Fibonacci number

// In mathematical terms, the sequence f(n) of fibonacci numbers is defined by the recurrence relation

// f(n) = f(n-1) + f(n-2)

// with seed values

// f(1) = 1 and f(2) = 1

// #Your task

// You have to create the function fibonacci that receives n and returns f(n). You have to use recursion.

// Pass in a positive integer n
// Return a number, the nth term of the fibonacci sequence using recursion
// 2 -> 2

// If n < 2 return 1, use recursion to return the function with f(n-1) + f(n-2)

const fibo = n => {
    if (n < 3) return 1;
    return fibo(n - 1) + fibo(n - 2);
};

// Refactored using ternary and implicit return

const fibonacci = n => n < 3 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);