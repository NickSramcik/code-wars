// Write a function that removes every lone 9 that is inbetween 7s.

// "79712312" --> "7712312"
// "79797"    --> "777"

// Pass in a string
// Return a string

// Loop through string
//    If current is 9, & both previous and next are 7, remove current
// Return result

function sevenAte9(str) {
    return str.split('')
              .map((current, i, arr) => {
                const prev = arr[i - 1];
                const next = arr[i + 1];

                if (current == '9' && prev == '7' && next == '7') return '';
                else return current;
            }).join('');
}

// Refactored w/ replaceAll
// Just kidding this breaks w/ edge cases

// function sevenAte9(str) {
//     return str.replaceAll('797', '77');
// }
