// Write a method, that replaces every nth char oldValue with char newValue.

// Inputs
// text: the string to modify
// n: change the target letter every nth occurrencies
// old_value (or similar): the targetted character
// new_value (or similar): the character to use as replacement
// Note for untyped languages: all inputs are always valid and of their expected type.

// Rules
// Your method has to be case sensitive!
// If n is 0 or negative or if it is larger than the count of the oldValue, return the original text without a change.
// Example:
// n:         2
// old_value: 'a'
// new_value: 'o'
// "Vader said: No, I am your father!"
//   1     2          3        4       -> 2nd and 4th occurence are replaced
// "Vader soid: No, I am your fother!"
// As you can see in the example: The first changed is the 2nd 'a'. So the start is always at the nth suitable char and not at the first!

// Pass in:
// 3 strings: text, oldValue, newValue
// 1 number: n

// Return a string

// Loop through text
//   if current character equals oldValue:
//     decrement n
//     if n is 0:
//        reset n
//        replace oldValue with newValue
// Return result

function replaceNth(text, n, oldValue, newValue) {
    let result = '';
    let step = n; 

    for (let char of text) {
        if (char == oldValue) {
            step--;
            if (step == 0) {
                step = n;
                result += newValue;
            }else result += char;
        }else result += char;
    }

    return result;
}

// Test Cases

console.log(replaceNth("Vader said: No, I am your father!", 2, 'a', 'o') == "Vader soid: No, I am your fother!");
console.log(replaceNth("Vader said: No, I am your father!", 6, 'a', 'o') == "Vader said: No, I am your father!");
console.log(replaceNth("Vader said: No, I am your father!", 0, 'a', 'o') == "Vader said: No, I am your father!");
