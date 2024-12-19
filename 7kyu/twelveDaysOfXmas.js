// Oh No!

// The song sheets have been dropped in the snow and the lines of each verse have become all jumbled up.

// Task
// You have to write a comparator function which can sort the lines back into their correct order, otherwise Christmas will be cancelled!

// Reminder: Below is what the final verse should look like

// On the 12th day of Christmas my true love gave to me
// 12 drummers drumming,
// 11 pipers piping,
// 10 lords a leaping,
// 9 ladies dancing,
// 8 maids a milking,
// 7 swans a swimming,
// 6 geese a laying,
// 5 golden rings,
// 4 calling birds,
// 3 French hens,
// 2 turtle doves and
// a partridge in a pear tree.

// Pass in two strings
// Return 1 or -1

// Store the correct order in an array
// Sort the input array by the index of each string in the map
// Return result

var comparator = function (a, b) {
    const twelveDays = [
        '12 drummers drumming,',
        '11 pipers piping,',
        '10 lords a leaping,',
        '9 ladies dancing,',
        '8 maids a milking,',
        '7 swans a swimming,',
        '6 geese a laying,',
        '5 golden rings,',
        '4 calling birds,',
        '3 French hens,',
        '2 turtle doves and',
        'a partridge in a pear tree.',
    ];

    return twelveDays.indexOf(a) > twelveDays.indexOf(b) ? 1 : -1;
};

// Refactored without storing order

var comparator = function (a, b) {
    if (a[0] == 'a' || b[0] == 'O') return 1;
    if (Number.parseInt(a) < Number.parseInt(b)) return 1;
    return -1;
};

// Refactored with abstracted comparisons

var comparator = function (a, b) {
    const smallerNum = (a, b) => Number.parseInt(a) < Number.parseInt(b);
    const isStartOrEnd = (a, b) => a[0] == 'a' || b[0] == 'O';
    return smallerNum(a, b) || isStartOrEnd(a, b) ? 1 : -1;
};
