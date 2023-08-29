// Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

// Make sure that your function does not return a false positive by only checking the day.

// Pass in date
// Return boolean, whether date is today

// example date:  2023-08-29T03:58:10.597Z
// Slice it and compare

function isTodayOld(date) {
    const today = new Date();
    return today.toString().slice(0, 15) == '' + date.toString().slice(0, 15);
}

// Refactored to arrow function using toDateString

const isToday = date => new Date().toDateString() == date.toDateString();

console.log(new Date().toDateString())
