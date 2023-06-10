// Hey awesome programmer!

// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

// Go on and code some pure awesomeness!

// Pass in an array of positive integers
// Return the smallest missing number
// [0, 1, 3, 4, 6] -> 2

// Loop from 0 to array length - 1
// If current index is not found in array, return it
// If end of loop is reached, return max value + 1

function nextId(ids){
    for (i = 0; i < ids.length; i++) {
        if (!ids.includes(i)) return i;
    }

    return Math.max(...ids) + 1;
}

// Refactored using a while loop

function nextId(ids) {
    let newID = 0;
    while (ids.includes(newID)) newID++
    return newID;
}
