// You must create a function, spread, that takes a function and a list of arguments to be applied to that function. You must make this function return the result of calling the given function/lambda with the given arguments.

// eg:

// spread(someFunction, [1, true, "Foo", "bar"] )
// // is the same as...
// someFunction(1, true, "Foo", "bar")

// Pass in a function, and an array of arguments
// Return the input function calling all the elements of the input array
// shrek, [1, true, 'onion'] -> shrek(1, true, 'onion')

// Use spread syntax to call the array's arguments

function spread(func, args) {
    return func(...args);
}

// Refactored using arrow function and apply

const spread = (func, args) => func.apply(null, args);
