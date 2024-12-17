// Grinch wants to spoil Christmas for JavaScript programmers. For that, he devised a hellish plan: pollute their Date prototype so that Christmas never happens. He wants to change method getDate of Date so that it returns 26 for Date objects that represent 25th of December but works correctly for all other days of the year.

// However, Grinch does not know how to do that. Can you help him?

// Pass in a Date object
// Return a number

// Example stringified date object: Fri Oct 25 1957 00:00:00 GMT+0000 (Coordinated Universal Time)

// Stringify date object and split it by its spaces
// Destructure the first 3 elements of the date to store weekday, month, and date
// If month is Dec and date is 25, return 26
// Return the normal date otherwise

Date.prototype.getDate = function getGrinchDate() {
    const [weekday, month, date] = this.toString().split(' ');
    return month == 'Dec' && date == 25 ? 26 : date;
}

// Original method of storing the original date method first

const originalDate = Date.prototype.getDate;

Date.prototype.getDate = function getGrinchDate() {
    if (this.getMonth() == 11 && originalDate.call(this) == 25) return 26;
    return originalDate.call(this);
}
