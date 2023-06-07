// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

// Pass in a number or a string
// Return a number, or 'error' if input is a string
// 1 -> 56

// If input is string return 'error'
// Multiply input by 50, add 6, and return

function problem(x){
    if (typeof x == 'string') return 'Error'
    return x * 50 + 6;
}

// Refactored using arrow function and ternary operator

const problem = x => typeof x == 'string' ? 'Error' : x * 50 + 6;
