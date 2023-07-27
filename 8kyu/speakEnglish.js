// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.

// Pass in a string
// Return boolean, whether input includes 'english' (not case sensitive)
// 'shrek loves the english' -> true

// use includes method on lowercased input

function spEng(sentence) {
    return sentence.toLowerCase().includes('english');
}
