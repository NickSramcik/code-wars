// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

// Pass in an operator and 2 numbers
// Return the results of the math based on the operator input
// +, 2, 5 -> 7

// Check for each operator and return the according math

function basicOp(operation, value1, value2) {
  if (operation == '+') return value1 + value2;
  if (operation == '-') return value1 - value2;
  if (operation == '*') return value1 * value2;
  if (operation == '/') return value1 / value2;
}

// Using switch case

const basicOp = (op, v1, v2) => {
    switch (op) {
        case '+':
            return v1 + v2;
        case '-':
            return v1 - v2;
        case '*':
            return v1 * v2;
        case '/':
            return v1 / v2;
    }
}

// Using .eval() method, which basically evaluates a string

const basicOp = (o, v1, v2) => eval(v1+o+v2);