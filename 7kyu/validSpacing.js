// Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either true or false (or the corresponding value in each language).

// For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Words can be any consecutive sequence of non space characters. Below are some examples of what the function should return:

// * 'Hello world'   => true
// * ' Hello world'  => false
// * 'Hello world  ' => false
// * 'Hello  world'  => false
// * 'Hello'         => true

// Even though there are no spaces, it is still valid because none are needed:
// * 'Helloworld'    => true
// * 'Helloworld '   => false
// * ' '             => false
// * ''              => true
// Note - there will be no punctuation or digits in the input string, only letters.

// Pass in a string
// Return boolean

// let space be true
// Loop through input string
//   if current char is a space and space is true, return false
//   set space to true/false depending on if current char is a space
// if str !== str.trim(), return false
// return true

function validSpacing(str) {
    let space = true;

    for (char of str) {
        if (space && char == ' ') return false;
        space = char == ' ';
    }

    return str == str.trim();
}

// Refactored to check for consecutive spaces and trim

function validSpacing(str) {
    return str == str.trim() && !str.includes('  ');
}
