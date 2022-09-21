// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!


// Pass in a positive integer
// Return a string, the number expanded into each digit over 0
// 21210 -> '20000 + 1000 + 200 + 10'

// Convert number to array and loop through it. If number is > 0, add it to new array. Then join array with ' + '.

function expandedForm(num) {
    let expand = [];
    [...String(num)].forEach((e, i, a) => {
        if (Number(e) > 0) expand.push(e.padEnd(a.length - i, '0'));
    });
    return expand.join(' + ');
  }

// Map the array and then filter out any values with just a bunch of zeroes 
// Multiply each value by 10 ^ i to get the zeroes we need
// Reverse the array before mapping so we can use i instead of length - i

const expandedForm = n => 
    [...n+''].reverse().map((e, i) => e * Math.pow(10, i)).filter(e => e > 0).reverse().join(' + ');