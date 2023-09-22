// Write a function that determines whether the passed in sequences are similar. Similar means they contain the same elements, and the same number of occurrences of elements.

// var arr1 = [1, 2, 2, 3, 4],
//     arr2 = [2, 1, 2, 4, 3],
//     arr3 = [1, 2, 3, 4],
//     arr4 = [1, 2, 3, "4"]
// arraysSimilar(arr1, arr2); // Should equal true
// arraysSimilar(arr2, arr3); // Should equal false
// arraysSimilar(arr3, arr4); // Should equal false

// Pass in 2 arrays
// Return boolean, whether they have same elements

// If input array lengths aren't equal, return false
// Sort both input arrays
// Loop through arr1 and return whether every element is equal to arr2's element of same index

function arraysSimilar(arr1, arr2) {
    if (arr1.length != arr2.length) return false;
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    return arr1.every((e, i) => e === arr2[i]);
}

// Refactored using reduce 
// Will Produce false positives for something like [1, 10] and [2, 9] but it's fun anyway

function arraysSimilar(arr1, arr2) {
    return arr1.reduce((a, c) => a + c, 0) == arr2.reduce((a, c) => a + c, 0);
}

// Refactored for readability

function arraysSimilar(arr1, arr2) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return arr1.reduce(reducer) === arr2.reduce(reducer);
}
