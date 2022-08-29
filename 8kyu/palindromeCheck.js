// Palindrome strings
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

// Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

// Examples(Input ==> Output)
// "anna"   ==> true
// "walter" ==> false
// 12321    ==> true
// 123456   ==> false


// Pass in a string or a number
// Return boolean, whether input is a palindrome
// 'racecar' -> true

// Check if first half equals the second half reversed

function isPalindrome(line) {
    line = String(line);
    return line.slice(0, Math.floor(line.length / 2)) === 
        line.slice(Math.ceil(line.length / 2)).split('').reverse().join('');
  }

// You can just check if the input equals itself reversed (of course!)

const isPalindrome = s => String(s) === String(s).split('').reverse().join('');

// Even shorter just for fun

const isPalindrome = s => s+'' == [...s+''].reverse().join('');




