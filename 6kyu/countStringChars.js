// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


// Pass in a string
// Return an object containing properties representing each character, with a count of its respectibe character
// 'onions have layers' -> { o: 2, n: 1, i: 1, ...}

// Create a count object. 
// Loop through string. For each character, check if property exists. Add to counter if it does, otherwise create. 
// Return object

function count (str) {  
    let res = {};
    [...str].forEach(e => {
        if (res[e]) res[e] += 1;
        else res[e] = 1;
    });
    return res;
  }

// Refactored with turnary 

const count = (str, res = {}) => {
    [...str].forEach(e => res[e] ? res[e] += 1 : res[e] = 1);
    return res;    
}

// OR assignment instead of turnary
const count = (str, res = {}) => {
    [...str].forEach(e => res[e] = ++res[e] || 1);
    return res;    
}

// One line using a reduce
const count = s => [...s].reduce((a, c) => (a[c] ? a[c] += 1 : a[c] = 1, a), {});

// -~value will add 1 to the value, or set it to 1 if it is undefined
const count = s => [...s].reduce((a, c) => (a[c] = -~a[c], a), {});

