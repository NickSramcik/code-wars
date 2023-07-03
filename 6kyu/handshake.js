// Johnny is a farmer and he annually holds a beet farmers convention "Drop the beet".

// Every year he takes photos of farmers handshaking. Johnny knows that no two farmers handshake more than once. He also knows that some of the possible handshake combinations may not happen.

// However, Johnny would like to know the minimal amount of people that participated this year just by counting all the handshakes.

// Help Johnny by writing a function, that takes the amount of handshakes and returns the minimal amount of people needed to perform these handshakes (a pair of farmers handshake only once).

// Pass in a number, positive integer h
// Return a number, minimum amount of people who could produce n handshakes
// 6 -> 4

// Store farmers and a count
// While count is less than handshakes, increment farmers, and add farmer count to handshake count - 1
// Return farmers

function getParticipants(handshakes) {
    let farmers = 0,
        count = 0;
    
    while (count < handshakes) {
        farmers++;
        count += farmers - 1;
    }

    return farmers;
}

// Refactored using algorithm

const getParticipants = handshakes => handshakes == 0 ? 0 : Math.ceil((1 + Math.sqrt(1 + 8 * handshakes)) / 2);
