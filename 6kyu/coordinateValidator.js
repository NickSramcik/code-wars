// You need to create a function that will validate if given parameters are valid geographical coordinates.

// Valid coordinates look like the following: "23.32353342, -32.543534534". The return value should be either true or false.

// Latitude (which is first float) can be between 0 and 90, positive or negative. Longitude (which is second float) can be between 0 and 180, positive or negative.

// Coordinates can only contain digits, or one of the following symbols (including space after comma) __ -, . __

// There should be no space between the minus "-" sign and the digit after it.

// Here are some valid coordinates:

// -23, 25
// 24.53525235, 23.45235
// 04, -23.234235
// 43.91343345, 143
// 4, -3
// And some invalid ones:

// 23.234, - 23.4234
// 2342.43536, 34.324236
// N23.43345, E32.6457
// 99.234, 12.324
// 6.325624, 43.34345.345
// 0, 1,2
// 0.342q0832, 1.2324

// Pass in a string
// Return boolean, whether the string is a set of valid coordinates
// 4, -3 -> true
// 0, 1,2 -> false

// Return false if 'e' is found in input
// Store lat and long, spliting with ', ' as separator
// Check lat rules. If any fail, return false
// Check long rules. If any fail, return false
// Return true 

function isValidCoordinates(coordinates) {
    if (coordinates.includes('e')) return false;

    const lat = Number(coordinates.split(', ')[0]),
          long = Number(coordinates.split(', ')[1]);

    if (Number.isNaN(lat) || lat < -90 || lat > 90) return false;
    if (Number.isNaN(long) || long < -180 || long > 180) return false;
    
    return true; 
}
