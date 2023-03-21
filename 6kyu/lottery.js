// Time to win the lottery!

// Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

// Example ticket:

// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
// To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

// Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

// All inputs will be in the correct format. Strings on tickets are not always the same length.

// Pass in an array of arrays, and a number
// Return a string, based on whether lottery was won
// [['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1 -> 'Winner!'

// Store a variable for mini wins
// Loop through the array
// For each sub array, loop through the first value and check if char code equals the second array value
// If any do, increment mini wins
// If mini wins >= number input, return winner. Otherwise return loser. 

function bingo(ticket, win){
    let miniWins = 0;
    for (section of ticket) {
        const goal = section[1];
        
        for (letter of section[0]) {
            if (letter.charCodeAt(0) == goal) {
                miniWins++; 
                break;
            };
        };
    };

    return miniWins >= win ? 'Winner!' : 'Loser!';
};

// Refactored into arrow function using .some() method

const bingo = (ticket, win) =>
    ticket.filter(e => e[0].split('').some(k => k.charCodeAt(0) == e[1])).length >= win ? 'Winner!' : 'Loser!';