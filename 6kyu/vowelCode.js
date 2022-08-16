// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

// Pass in a string
// Return the string with vowels changed to numbers
// Do the reverse as well
// 'onion' -> '4n34n' 

// Set constants, loop through them and replaceAll the string

const letters = ['a', 'e', 'i', 'o', 'u'],
      numbers = [1, 2, 3, 4, 5];

function encode(string) {
    letters.forEach((e, i) => string = string.replaceAll(e, numbers[i]));
    return string;
}

function decode(string) {
    numbers.forEach((e, i) => string = string.replaceAll(e, letters[i]));
    return string;
  }
// ^This works but codewars doesn't support replaceAll >:(


// For each element in the constant arrays, map the input
//if the letter matches a vowel, replace it with corresponding number

const letters = ['a', 'e', 'i', 'o', 'u'],
      numbers = [1, 2, 3, 4, 5];

function encode(string) {
  letters.forEach((e, i) => string = string.split('').map(k => k === e ? numbers[i] : k).join(''));
  return string;
}

function decode(string) {
  numbers.forEach((e, i) => string = string.split('').map(k => k == e ? letters[i] : k).join(''));
  return string;
}