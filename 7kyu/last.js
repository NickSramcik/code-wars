// Find the last element of the given argument(s).

// Examples
// last([1, 2, 3, 4] ) // =>  4
// last("xyz")         // => "z"
// last(1, 2, 3, 4)    // =>  4
// In javascript and CoffeeScript a list will be an array, a string or the list of arguments.

// Pass in any argument(s)
// Return the last argument, or the last element in argument if array

function last(x) {
    if (typeof x == 'string' && arguments.length == 1) return x.slice(-1);
    if (arguments.length == 1) return x[x.length - 1] || x;
    return arguments[arguments.length - 1];
}

// Refactored

function last(x) {
    const last = arguments[arguments.length - 1];
    return last[last.length - 1] || last;
}
