// It's almost Christmas Eve, so we need to prepare some milk and cookies for Santa! Wait... when exactly do we need to do that?

// Time for Milk and Cookies
// Complete the function function that accepts a Date object, and returns true if it's Christmas Eve (December 24th), false otherwise.

// Keep in mind Javascript's Date month is 0 based!

// Examples
// timeForMilkAndCookies(new Date(2013, 11, 24))  // true
// timeForMilkAndCookies(new Date(2013, 0, 23))   // false
// timeForMilkAndCookies(new Date(3000, 11, 24))  // true

// Pass in a Date object
// Return boolean

// Check if getMonth = 11 (January is 0th month, December is 11th) 
//   and if getDate = 24

function timeForMilkAndCookies(date){
    const December = 11;
    const XmasEve = 24;
    return date.getMonth() == December && date.getDate() == XmasEve;
}
