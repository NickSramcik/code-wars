// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

// Pass in 4 strings
// Return boolean

// Convert input dates to Date objects using new Date
// Convert date objects to Time format for easier comparison
// Return whether the codes match AND the current date is <= expiration date

function checkCouponOld(enteredCode, correctCode, currentDate, expirationDate){
    currentDate = new Date(currentDate).getTime();
    expirationDate = new Date(expirationDate).getTime();
    return (enteredCode === correctCode && currentDate <= expirationDate);
}

// Refactored

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return (enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate));
}

// console.log(new Date('July 9, 2015').getTime() > new Date("July 9, 2015").getTime())

// Test Cases

console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'), '->', true);
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014'), '->', false);
