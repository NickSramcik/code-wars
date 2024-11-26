// Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.

// Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. If the number cannot be matched then the function should return the string Unknown.

// | Card Type  | Begins With          | Number Length |
// |------------|----------------------|---------------|
// | AMEX       | 34 or 37             | 15            |
// | Discover   | 6011                 | 16            |
// | Mastercard | 51, 52, 53, 54 or 55 | 16            |
// | VISA       | 4                    | 13 or 16      |
// Examples
// getIssuer(4111111111111111) == "VISA"
// getIssuer(4111111111111) == "VISA"
// getIssuer(4012888888881881) == "VISA"
// getIssuer(378282246310005) == "AMEX"
// getIssuer(6011111111111117) == "Discover"
// getIssuer(5105105105105100) == "Mastercard"
// getIssuer(5105105105105106) == "Mastercard"
// getIssuer(9111111111111111) == "Unknown"

// Pass in a number
// Return a string

// let CardTypes be an object that stores each card's valid prefixes
// Loop through CardTypes
//    if a CardType matches input's prefix and length, return the name of that CardType
// Return 'Unknown' after the loop, we didn't find any valid types

function getIssuer(number) {
    const CardTypes = {
        'AMEX': {
            prefixes: [34, 37],
            lengths: [15]
        },
        'Discover': {
            prefixes: [6011],
            lengths: [16]
        },
        'Mastercard': {
            prefixes: [51, 52, 53, 54, 55],
            lengths: [16]
        },
        'VISA': {
            prefixes: [4],
            lengths: [13, 16]
        }
    }

    for (let cardType in CardTypes) {
        const validPrefixes = CardTypes[cardType].prefixes;
        const prefixLength = validPrefixes[0].toString().length;
        const thisPrefix = Number(number.toString().slice(0, prefixLength));
        const validLengths = CardTypes[cardType].lengths;
        const thisLength = number.toString().length;
        
        if (validPrefixes.includes(thisPrefix) && validLengths.includes(thisLength)) return cardType;
    }

    return 'Unknown';
}
