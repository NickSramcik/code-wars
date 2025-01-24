// You will be given an array of numbers.

// For each number in the array you will need to create an object.

// The object key will be the number, as a string. The value will be the corresponding character code, as a string.

// Return an array of the resulting objects.

// All inputs will be arrays of numbers. All character codes are valid lower case letters. The input array will not be empty.

// Pass in an array of numbers
// Return an array of objects

// Map the input array
//   Convert each number to the following object:
//   number(string) : character from code (string)
// Return result

function numObj(arr) {
    return arr.map(num => {
        const key = String(num);
        const value = String.fromCharCode(num);
        const result = {};

        result[key] = value;
        return result;
    });
}
