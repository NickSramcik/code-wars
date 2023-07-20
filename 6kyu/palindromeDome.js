// A palindrome is a word, phrase, number, or other sequence of symbols or elements, whose meaning may be interpreted the same way in either forward or reverse direction. Famous examples include "Amore, Roma", "A man, a plan, a canal: Panama" and "No 'x' in 'Nixon'". - wikipedia

// Our goal is to determine whether or not a given string is a valid palindrome or not.

// Like the above examples, here are a few test cases which are also populated:

// "Amore, Roma" => valid
// "A man, a plan, a canal: Panama" => valid
// "No 'x' in 'Nixon'" => valid
// "Abba Zabba, you're my only friend" => invalid
// You can see that they are case insensitive and disregards non alphanumeric characters. In addition to a few predefined tests, your function will also be tested against a random string generator 50 times which are guaranteed to produce valid palindromes.

// Notes:

// The empty string "" can be read forward or backward the same, it's a palindrome in our case.

// Pass in a string
// Return boolean, whether or not input is palindrome. (Case insensitive, ignore non-letters)
// "Amore, Roma" => true

// lowercase entire input string
// Convert to array, filter it to only letters & numbers
// return whether the string equals itself reversed

function palindrome(string) {
    string = [...string.toLowerCase()].filter(e => /[a-z0-9]/.test(e));
    return string.join('') == string.reverse().join('');
}

// Refactored to loop through both ends of the string and return false if a match isn't found
// This is more efficient if the input isn't a palindrome

function palindrome(string) {
    const palindrome = string.toLowerCase().replace(/[^a-z0-9]/g, "");

    for (i = 0; i < palindrome.length / 2; i++) {
        if (palindrome[i] !== palindrome[palindrome.length - 1 - i]) return false;
    }

    return true;
}
