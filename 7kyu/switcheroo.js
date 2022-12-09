// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'


// Pass in a string of characters a, b, and c
// Switch instances of a and b
// 'aaacbbb' -> 'bbbcaaa'

// Convert string to array, loop through and replace a with b, and c with b using a double ternary
// Join back into string & return

function switcheroo(x){
    return x.split('').map(e => e == 'a' ? 'b' : e == 'b' ? 'a' : e).join('');
}

// Refactored into arrow function

const switcheroo = x => [...x].map(e => e == 'a' ? 'b' : e == 'b' ? 'a' : e).join('');