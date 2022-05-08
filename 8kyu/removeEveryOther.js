// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!


// Using a for loop
// Check for odd indeces so those alone can be removed

// function removeEveryOther(arr){
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 === 1)
//             console.log(arr[i])
//     }return arr
//   }

// It's better to just use a filter

const removeEveryOther = arr => arr.filter((e, i) => i % 2 === 0);

// Expanded

function removeEveryOther(arr){
    return arr.filter((element, index) => i % 2 === 0);
  }

// Checking if i % 2 is falsey is the same as checking that it equals 0
// element argument can be made an underscore to show it isn't needed

const removeEveryOther = arr => arr.filter((_, i) => !(i % 2))