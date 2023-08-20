// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

// Pass in a positive integer
// Return as string

// Store a result string
// Set result to repeat '+' n times
// Add '\n' if n > 1 and repeat the entire thing n times

function generateShape(integer){
    let square = '+'
    square = square.repeat(integer);
    if (integer > 1) {
        square += '\n';
        square = square.repeat(integer)
    }else return '+';
    return square.slice(0, -1);
}

// Refactored using trim

const generateShape = n => ('+'.repeat(n) + '\n').repeat(n).trim();
