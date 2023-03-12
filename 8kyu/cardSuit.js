// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

// Return a string containing a suit symbol
// Return a string, the corresponding suit written out
// ('3♥') -> return 'hearts'


// Series of if statements checking for inclusion of each suit

function defineSuit(card) {
    if (card.includes('♣')) return 'clubs';
    if (card.includes('♦')) return 'diamonds';
    if (card.includes('♥')) return 'hearts';
    if (card.includes('♠')) return 'spades';
  }

// Refactored with switch/case, checking last value instead of looping through the string

function defineSuit(card) {
    switch (card.slice(-1)) {
        case '♣': return 'clubs';
        case '♦': return 'diamonds';
        case '♥': return 'hearts';
        case '♠': return 'spades';
    };
  }

// Use an object to return the correct string

function defineSuit(card) {
    const suitMap = {
        '♣': 'clubs',
        '♦': 'diamonds',
        '♥': 'hearts',
        '♠': 'spades',
    };
    return suitMap[card.slice(-1)];
  };