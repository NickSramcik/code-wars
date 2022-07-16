// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// Pass in a string with words separated with a dash or underscore
// Return the string in camel case
// 'ogres-are-like-onions' -> 'ogresAreLikeOnions'

// Split the string into an array with dash/underscore separators
// Capitalize the first letter of each element
// Join the array into a string and return


function capitalizeWord(word) {
    let arr = word.split('');
    arr[0] = arr[0].toUpperCase();
    return arr.join('')
   }

function toCamelCase(str){
    if (str.includes('-')) {
        str = str.split('-');
    }else str = str.split('_');
    for (i = 1; i < str.length; i++) {
        str[i] = capitalizeWord(str[i]);
    }return str.join('');
}

// Using a for loop to check for - or _, if found, remove that symbol and capitalize next letter

function toCamelCase(str){
    let arr = str.split('');
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === '-' || arr[i] === '_') {
            arr[i+1] = arr[i+1].toUpperCase();
            arr[i] = '';
        }
    }return arr.join('');
}

