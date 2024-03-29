// You will be given a sequence of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if all of the following continents / geographic zones will be represented by at least one developer: 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
// false otherwise.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
//   { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
//   { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
//   { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
//   { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
// ];
// your function should return true as there is at least one developer from the required 5 geographic zones.

// Notes:

// The input array and continent names will always be valid and formatted as in the list above for example 'Africa' will always start with upper-case 'A'.

// Pass in an array of objects
// Return boolean

// Store a continent map
// Loop through the input array
//      Set current continent to true in map
// Loop through continent map
//      If any continent is falsey, return false
// Return true

function allContinents(list) {
    const continents = {'Africa': false, 'Americas': false, 'Asia': false, 'Europe': false, 'Oceania': false};

    for (dev of list) {
        continents[dev.continent] = true;
    }

    for (continent in continents) {
        if (!continents[continent]) return false;
    }

    return true;
}

// Refactored using every

function allContinents(list) {
    const continents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
    return continents.every(continent => list.some(dev => continent == dev.continent));
}

// Refactored using set size

function allContinents(list) {
    return new Set(list.map(dev => dev.continent)).size == 5;
}
