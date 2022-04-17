// Write a function that returns both the minimum and maximum number of the given list/array.

// function minMax(arr){
//     let max = arr.reduce((a, c) => Math.max(a, c))
//     let min = arr.reduce((a, c) => Math.min(a, c))
//     return [min, max]
//   }


const minMax = arr => [Math.min(...arr), Math.max(...arr)]