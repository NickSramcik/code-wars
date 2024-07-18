// Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

// Notes
// If the array is null/nil/None or empty you should return empty array ([]).
// The rotten fruit name will be in this camelcase (rottenFruit).
// The returned array should be in lowercase.

// Pass in an array of strings
// Return an array of strings

// Map the input array
//   If current fruit begins with 'rotten' slice out the first 6 chars and lowercase the rest
// Return result

function removeRotten(bagOfFruits) {
    return bagOfFruits ? bagOfFruits.map(fruit => fruit.slice(0, 6) == 'rotten' ? fruit.slice(6).toLowerCase() : fruit) : [];
}

// Refactored for readability

function removeRotten(bagOfFruits) {
    const result = [];

    for (let fruit of bagOfFruits) {
        if (fruit.slice(0, 6) == 'rotten') {
            result.push(fruit.slice(6).toLowerCase());
        }
        else result.push(fruit);
    }

    return result;
}
