// You'll be passed an array of objects (list) - you must sort them in descending order based on the value of the specified property (sortBy).

// Example
// When sorted by "a", this:

// [
//   {"a": 1, "b": 3},
//   {"a": 3, "b": 2},
//   {"a": 2, "b": 40},
//   {"a": 4, "b": 12}
// ]
// should return:

// [
//   {"a": 4, "b": 12},
//   {"a": 3, "b": 2},
//   {"a": 2, "b": 40},
//   {"a": 1, "b": 3}
// ]
// The values will always be numbers, and the properties will always exist.

// Pass in an array of objects
// Return an array of objects (sorted)

// Sort the array in ascending order by the values inside of property: sortBy
// Return result

function sortList(sortBy, list) {
    return list.sort((a, b) => b[sortBy] - a[sortBy]);
}
