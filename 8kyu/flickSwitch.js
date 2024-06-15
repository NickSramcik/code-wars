// Create a function that always returns True/true for every item in a given list.
// However, if an element is the word 'flick', switch to always returning the opposite boolean value.

// Examples
// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
// Notes
// "flick" will always be given in lowercase.
// A list may contain multiple flicks.
// Switch the boolean value on the same element as the flick itself.

// Pass in an array of strings
// Return an array of strings

// Store a boolean switch value, set to true
// Store result array
// Loop through input array
//    If current value is 'flick', flip the switch value
//    Push switch to result
// Return result

function flickSwitch(arr) {
    const result = [];
    let switchy = true;

    for (str of arr) {
        if (str == 'flick') switchy = !switchy;
        result.push(switchy);
    }

    return result;
}

// refactored with map

function flickSwitch(arr) {
    let flick = true;
    return arr.map(str => str == 'flick' ? flick = !flick : flick);
}
