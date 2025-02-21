// Write a method that returns true if a given parameter is a power of 4, and false if it's not. If parameter is not an Integer (eg String, Array) method should return false as well.

// (In C# Integer means all integer Types like Int16,Int32,.....)

// Examples
// powerOf4(1024) // returns true
// powerOf4(44) // returns false
// powerOf4("not a positive integer") // returns false

// Pass in a number n
// Return boolean

// Recursive function
//   If n is 1 return true
//   If n % 1 is not 0, or n isn't a number, return false
//       Recurse this function after dividing n by 4

function powerOf4(n) {
    if (n === 1) return true;
    if (!n || n % 1 !== 0 || typeof n !== 'number') return false;
    return powerOf4(n / 4);
}

// Refactored w/ logs

function powerOf4(n) {
    return typeof n === 'number' && Number.isInteger(Math.log(n) / Math.log(4));
}
