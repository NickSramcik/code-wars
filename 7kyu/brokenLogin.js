// While developing a website, you detect that some of the members have troubles logging in. Searching through the code you find that all logins ending with a "_" make problems. So you want to write a function that takes an array of pairs of login-names and e-mails, and outputs an array of all login-name, e-mails-pairs from the login-names that end with "_".

// If you have the input-array:

// [ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ]
// it should output

// [ [ "bar_", "bar@bar.com" ] ]
// You have to use the filter-method which returns each element of the array for which the filter-method returns true.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// Pass in an array of sub-arrays, each containing 2 strings
// Return a filtered array of the input

// Filter the input array and return it:
//   Check for login names that end with '_' 

function searchNames(logins) {
    return logins.filter(login => login[0].slice(-1) == '_');
}

// Refactored for readability using String.endsWith()

function searchNames(logins) {
    return logins.filter(login => {
        const username = login[0];
        return username.endsWith('_');
    });
}
