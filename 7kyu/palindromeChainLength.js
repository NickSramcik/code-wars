// Number is a palindrome if it is equal to the number with digits in reversed order. For example, 5, 44, 171, 4884 are palindromes, and 43, 194, 4773 are not.

// Write a function which takes a positive integer and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.

// If the input number is already a palindrome, the number of steps is 0.

// All inputs are guaranteed to have a final palindrome which does not overflow MAX_SAFE_INTEGER.

// Example
// For example, start with 87:

//   87 +   78 =  165     - step 1, not a palindrome
//  165 +  561 =  726     - step 2, not a palindrome
//  726 +  627 = 1353     - step 3, not a palindrome
// 1353 + 3531 = 4884     - step 4, palindrome!
// 4884 is a palindrome and we needed 4 steps to obtain it, so answer for 87 is 4.


// Pass in a positive integer, no edge cases
// Return the amount of "special steps" needed to make input a palindrome (same forward & reverse)
// Special step = reverse number and add to original


var palindromeChainLength = function(n) {
    // Run a loop, each iteration, check if palindrome
    for (i = 0; i < 100; i++) {
        // if string n equal to reveresed string n, return index
        if (String(n) === String(n).split('').reverse().join('')) return i;
        // otherwise, do a special step (reverse and accumulate) 
        else n = n + Number(String(n).split('').reverse().join(''));
    }return 'Overflow Error'
  };

// Refactored into recursive function

const isPal = x => x == [...x+''].reverse().join('');
let palindromeChainLength = function(n, i = 0) {
    return isPal(n) ? i : palindromeChainLength(n + +[...n+''].reverse().join(''), ++i);
}

// Refactored into one line

const palindromeChainLength = (n, i = 0) => 
    n == [...n+''].reverse().join('') ? i : palindromeChainLength(n + +[...n+''].reverse().join(''), ++i);

// Two one liners

const isPal = x => x == [...x+''].reverse().join('');
const palindromeChainLength = (n, i = 0) => isPal(n) ? i : palindromeChainLength(n + +[...n+''].reverse().join(''), ++i);