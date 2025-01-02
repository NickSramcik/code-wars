// Linked lists are data structures composed of nested or chained objects, each containing a single value and a reference to the next object.

// Here's an example of a list:

// {value: 1, next: {value: 2, next: {value: 3, next: null}}}
// Write a function listToArray (or list_to_array in Python) that converts a list to an array, like this:

// [1, 2, 3]
// Assume all inputs are valid lists with at least one value. For the purpose of simplicity, all values will be either numbers, strings, or Booleans.

// Pass in a linked list
// Return an array

// Let result be an empty array
// Let current be head of linked list
// While current is truthy:
//   Push current value to result
//   Set current to current.next
// Return result

function listToArray(list) {
    const result = [];
    let current = list;

    while (current) {
        result.push(current.value);
        current = current.next;
    }

    return result; 
}
