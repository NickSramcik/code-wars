// Complete the solution so that it returns true if it contains any duplicate argument values. Any number of arguments may be passed into the function.

// The array values passed in will only be strings or numbers. The only valid return values are true and false.

// Examples:

// solution(1, 2, 3)             -->  false
// solution(1, 2, 3, 2)          -->  true
// solution('1', '2', '3', '2')  -->  true

// Pass in any arguments
// Return boolean, whether there are dupes

// Spreaad all arguments into an array
// Create a new set of that array
// Compare length and size, return result

function solution(...args) {
    const unique = new Set(args);
    return args.length !== unique.size;
}
