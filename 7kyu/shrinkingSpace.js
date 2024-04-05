// Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
// For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']

// Pass in an array of strings
// Return an array of strings

// Store a concat placeholder string and a result array
// Loop through the input array
//      Concat current string to placeholder string
//      Push placeholder to result
// Return result

function spacey(array) {
    let concat = '';
    const result = [];

    for (let str of array) {
        concat += str;
        result.push(concat);
    }

    return result;
}
