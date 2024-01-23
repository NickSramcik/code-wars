// Complete the function so that it returns the number of seconds that have elapsed between the start and end times given.

// Tips:
// The start/end times are given as Date (JS/CoffeeScript), DateTime (C#), Time (Nim), datetime(Python) and Time (Ruby) instances.
// The start time will always be before the end time.

// Pass in 2 dates
// Return a number, seconds between the dates

// new Date(2013, 1, 1, 0, 0, 1), new Date(2013, 1, 1, 0, 0, 2) -> 1

// Get the seconds from each date
// Return the difference

function elapsedSeconds(startDate, endDate) {
    return (endDate.getTime() - startDate.getTime()) / 1000;
}

// Refactored, you don't even need to use the time method

const elapsedSeconds = (startDate, endDate) => (endDate - startDate) / 1000;

// Test Cases

console.log(elapsedSeconds(new Date(2013, 1, 1, 0, 0, 1), new Date(2013, 1, 1, 0, 0, 2)), '->', 1);
