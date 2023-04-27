// You'll implement once, a function that takes another function as an argument, and returns a new version of that function that can only be called once.

// Subsequent calls to the resulting function should have no effect (and should return undefined).

// For example:

// logOnce = once(console.log)
// logOnce("foo") // -> "foo"
// logOnce("bar") // -> no effect

// Pass in a function
// Return that function if it is the first time being called, then do nothing
// Example above

// Store a boolean value and set it to true on first execution
// Only return the function if that boolean value is false
// Use apply to execute the arguments on the passed in function

function once(fn) {
    let called = false;

    return function (...args) {
        if (!called) {
            called = true;
            return fn.apply(this, args);
        }
    };
}

// Refactored for simplicity

function once(fn) {
    let call = true;

    return function () {
        if (call) {
            call = false;
            return fn.apply(this, arguments);
        }
    };
}

// Refactored using arrow functions and ternary expression

const once = (fn, call = 0) => (...args) => call++ ? undefined : fn(...args);
