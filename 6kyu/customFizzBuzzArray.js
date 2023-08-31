// Write a function that returns a (custom) FizzBuzz sequence of the numbers 1 to 100.

// The function should be able to take up to 4 arguments:

// The 1st and 2nd arguments are strings, "Fizz" and "Buzz" by default;
// The 3rd and 4th arguments are integers, 3 and 5 by default.
// Thus, when the function is called without arguments, it will return the classic FizzBuzz sequence up to 100:

// [ 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, ... 14, "FizzBuzz", 16, 17, ... 98, "Fizz", "Buzz" ]
// When the function is called with (up to 4) arguments, it should return a custom FizzBuzz sequence, for example:

// ('Hey', 'There')      -->  [ 1, 2, "Hey", 4, "There", "Hey", ... ]
// ('Foo', 'Bar', 2, 3)  -->  [ 1, "Foo", "Bar", "Foo", 5, "FooBar", 7, ... ]
// Examples
// fizzBuzzCustom()[15]                         // returns 16
// fizzBuzzCustom()[44]                         // returns "FizzBuzz" (45 is divisible by 3 and 5)
// fizzBuzzCustom('Hey', 'There')[25]         // returns 26
// fizzBuzzCustom('Hey', 'There')[11]         // returns "Hey" (12 is divisible by 3)
// fizzBuzzCustom("What's ", "up?", 3, 7)[80] // returns "What's " (81 is divisible by 3)

// Pass in 2 strings, 2 numbers
// Return an array


// Store values according to inputs or defaults if not passed in
// Store result array
// Loop from 1 to 100
// Push current value to array
// If current value is a fizz/buzz number, replace with given string
// Return array

var fizzBuzzCustom = function(stringOne, stringTwo, numOne, numTwo) {
    const str1 = stringOne || 'Fizz',
          str2 = stringTwo || 'Buzz',
          num1 = numOne || 3,
          num2 = numTwo || 5,
          result = [];

    for (i = 1; i <= 100; i++) {
        if (!(i % (num1 * num2))) result.push(str1 + str2);
        else if (!(i % num1)) result.push(str1);
        else if (!(i % num2)) result.push(str2);
        else result.push(i);
    }

    return result;
};

// Refactored to set defaults in function declaration

function fizzBuzzCustom(str1 = 'Fizz', str2 = 'Buzz', num1 = 3, num2 = 5, result = []) {
    for (i = 1; i <= 100; i++) {
        if (!(i % (num1 * num2))) result.push(str1 + str2);
        else if (!(i % num1)) result.push(str1);
        else if (!(i % num2)) result.push(str2);
        else result.push(i);
    }

    return result;
}
