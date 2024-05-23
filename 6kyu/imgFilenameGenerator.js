// You are developing an image hosting website.

// You have to create a function for generating random and unique image filenames.

// Create a function for generating a random 6 character string which will be used to access the photo URL.

// To make sure the name is not already in use, you are given access to an PhotoManager object.

// You can call it like so to make sure the name is unique

// // at this point, the website has only one photo, hosted on the 'ABCDEF' url
// photoManager.nameExists('ABCDEF'); // returns true
// photoManager.nameExists('BBCDEF'); // returns false
// Note: We consider two names with same letters but different cases to be unique.

// Pass in nothing
// Return a string

// Use a random number generator, multiply it by 26 and add 97
// Convert that number to a letter
// Repeat ^this process 6 times, concatenating each string to a result string
// Return result if it is unique, otherwise do it all again

function randomChar() {
    const random = Math.random() * 26 + 97;
    return String.fromCharCode(random);
}

function generateName() {
    let result = '';

    while (result.length < 6) {
        result += randomChar();
    }

    return photoManager.nameExists(result) ? generateName() : result;
}

// Refactored using string bases
// Works great if we're okay with numbers in our random filename
// Base 36 uses 10 numerical symbols and 26 letter symbols (so all lowercase) 
// We slice from 2 to 8 because an example result is '0.kmn7tdzn41' and we don't want the decimal in there

const generateName = () => Math.random().toString(36).slice(2, 8);

// Refactored to check for duplicates

function generateName() {
    const result = Math.random().toString(36).slice(2, 8);
    return photoManager.nameExists(result) ? generateName() : result;
};
