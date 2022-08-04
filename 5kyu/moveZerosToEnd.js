// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// Pass in an array of inputs
// Return that array with order intact, but all 0s moved to the end
// ['Onions', 0, 'Have', 0, 'Layers', true, 69] -> ['Onions', 'Have', 'Layers', true, 69, 0, 0]

// Loop through the array. If element is 0, delete it and count it. Add counted 0s to end. 

function moveZeros(arr) {
    const zeros = arr.reduce((a, c) => c === 0 ? ++a : a, 0);
    arr = arr.filter(e => e !== 0);
    for (i = 0; i < zeros; i++) {
        arr.push(0);
    }return arr;
  }


// Filter out the 0s, concat a filter of the array of only the 0s

const moveZeros = arr => arr.filter(e => e !== 0).concat(arr.filter(e => e === 0));

// Create an array containing both filters

const moveZeros = arr => [...arr.filter(e => e !== 0), ...arr.filter(e => e === 0)];