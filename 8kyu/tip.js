// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

// "Rating not recognised" in Javascript, Python and Ruby...
// ...or null in Java
// ...or -1 in C#
// Because you're a nice person, you always round up the tip, regardless of the service.

// Pass in a number and a string
// Return a number

// Set rating to lowercase
// Check rating and return amount * respective tip
// If no rating is found return unrecog...

function calculateTip(amount, rating) {
    rating = rating.toLowerCase();
    let tip = null;

    if (rating == 'excellent') tip = amount * 0.20;
    else if (rating == 'great') tip = amount * 0.15;
    else if (rating == 'good') tip = amount * 0.10;
    else if (rating == 'poor') tip = amount * 0.05;
    else if (rating == 'terrible') tip = 0;
    else return 'Rating not recognised';

    return Math.ceil(tip);
}

// Refactored using objects

const TIPS = {
    'terrible': 0,
    'poor': 0.05,
    'good': 0.10,
    'great': 0.15,
    'excellent': 0.20
}

function calculateTip(amount, rating) {
    rating = rating.toLowerCase();
    return rating in TIPS ? Math.ceil(amount * TIPS[rating]) : 'Rating not recognised';
}
