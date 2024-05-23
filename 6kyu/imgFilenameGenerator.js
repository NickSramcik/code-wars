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
