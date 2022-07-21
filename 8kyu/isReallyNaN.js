// I've hit a few bugs in my Java/Type/Coffee-script code recently, and I've traced the problem back to the global isNaN function I was using. I had expected it to be more discerning, but it's returning true for undefined right now.

// Write a function isReallyNaN that returns true only if passed in an argument that evalutes to NaN, and returns false otherwise.

// Any solution is acceptable!

// Pass in any argument
// Return true if input is NaN, false otherwise

// undefined -> false

// Check if the input equals itself. Only NaN doesn't equal itself. 


const isReallyNaN = (val) => {
    return !(val === val);
  };

// One liner

const isReallyNaN = x => x!==x;

// Using a Number method

const isReallyNaN = x => Number.isNaN(x);