// write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, or if the letter occurs only once in the string, -1 should be returned.

// Examples:

// for inputs  "Hello world!!!", 'l'  ->  return 3
// for inputs  "Hello world!!!", 'A'  ->  return -1

// Pass in 2 strings (source and query)
// Return a number (index)

// Let foundFirst be false
// Loop through source
//    If current char equals query and foundFirst is false, set foundFirst to true
//    Else if current char equals query and foundFirst is true, return current index
// Return -1, second occurrence not found

function secondSymbol(source, query) {
    let foundFirst = false;

    for (let i in source) {
        const current = source[i];

        if (current == query && !foundFirst) foundFirst = true;
        else if (current == query && foundFirst) return Number(i);
    }

    return -1; // 2nd occurence not found
}

// Refactored w/ indexOf

// Second argument of this method tells it where to begin search
// If we start at index after first ocurrence, we'll get the 2nd

function secondSymbol(source, query) {
    const startingPoint = source.indexOf(query) + 1;
    return source.indexOf(query, startingPoint);
}
