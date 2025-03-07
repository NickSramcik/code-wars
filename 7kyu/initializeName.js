// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).

// Examples
// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

// Pass in a string
// Return a string

// Split input string to array of names
// If names array length is < 3, return input as is
// Let firstName be first name in array
// Let lastName be last name in array
// Map remaining names remaining in array to initialize them
// Join all strings back together and return result

function initializeNames(inputName) {
    const names = inputName.split(' ');
    if (names.length < 3) return inputName;

    const initialize = name => name.slice(0, 1) + '.';
    const firstName = names.shift();
    const lastName = names.pop();
    const initials = names.map(name => initialize(name)).join(' ');

    return `${firstName} ${initials} ${lastName}`;
}
