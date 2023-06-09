// Task Description
// You're re-designing a blog, and the blog's posts have the Weekday Month Day, time format for showing the date and time when a post was made, e.g., Friday May 2, 7pm.

// You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

// Write a function that takes the website date/time in its original string format and returns the shortened format.

// Input
// Input will always be a string, e.g., "Friday May 2, 7pm". 

// Output
// Output will be the shortened string, e.g., "Friday May 2".

// Pass in a string
// Return that string with a substring removed
// Examples above

// Split the string into an array of words
// Remove the last element of that array and join back into a string
// Slice the last character off (the comma) and return

function shortenToDate(longDate) {
    return longDate.split(' ').slice(0, 3).join(' ').slice(0, -1);
}

// Refactored using arrow function and using the comma as separator

const shortenToDate = longDate => longDate.split(',')[0];
