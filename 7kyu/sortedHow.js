// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

// Pass in an array
// Return a string

// Let input be the input array joined into a string, separate with . to prevent losing multi-digit numbers to the ether
// Let ascending be the input array sorted low to high, joined into a string
// Let descending be the input array sorted high to low, joined into a string
// Return a string respective to conditions explained above

function isSortedAndHow(arr) {
    const input = arr.join('.');
    const ascending = arr.sort((a, b) => a - b).join('.');
    const descending = arr.sort((a, b) => b - a).join('.');
    
    if (input == ascending) return 'yes, ascending';
    if (input == descending) return 'yes, descending';
    return 'no';
}
