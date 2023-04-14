// Modify the kebabize function so that it converts a camel case string into a kebab case.

// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
// Notes:

// the returned string should only contain lowercase letters

// Pass in a string
// Return that string in lowercase with a - after each capital letter (remove any numbers)
// 'onionsHaveLayers' -> 'onions-have-layers'

// Store a result string
// Loop through each letter of input string
// If letter is capital, add - and current letter in lowercase to result
// If letter is lowercase, add to result
// Return result string

function kebabize(string) {
    let kebab = '';

    for (letter of string) {
        if (letter.toUpperCase() != letter.toLowerCase()) {
            if (letter == letter.toUpperCase())
                kebab += '-' + letter.toLowerCase();
            else kebab += letter;
        }
    }

    return kebab[0] == '-' ? kebab.slice(1) : kebab;
}
