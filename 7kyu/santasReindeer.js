// Now, Dasher! Now, Dancer! Now, Prancer, and Vixen! On, Comet! On, Cupid! On, Donder and Blitzen! That's the order Santa wanted his reindeer...right? What do you mean he wants them in order by their last names!? Looks like we need your help Code Warrior!

// Sort Santa's Reindeer
// Write a function that accepts a sequence of Reindeer names, and returns a sequence with the Reindeer names sorted by their last names.

// Notes:
// It's guaranteed that each string is composed of two words, separated by a single space
// In case of two identical last names, keep the original order
// Examples
// For this input:

// [
//   "Dasher Tonoyan",
//   "Dancer Moore",
//   "Prancer Chua",
//   "Vixen Hall",
//   "Comet Karavani",
//   "Cupid Foroutan",
//   "Donder Jonker",
//   "Blitzen Claus"
// ]
// You should return this output:

// [
//   "Prancer Chua",
//   "Blitzen Claus",
//   "Cupid Foroutan",
//   "Vixen Hall",
//   "Donder Jonker",
//   "Comet Karavani",
//   "Dancer Moore",
//   "Dasher Tonoyan",
// ]

// Pass in an array of strings
// Return an array of strings

// Sort the input array:
//   split each string into an array w/ space separator, and pull the 2nd value
//   compare these values

function sortReindeer(reindeerNames) {
    return reindeerNames.sort((a, b) => {
        const lastNameA = a.split(' ')[1];
        const lastNameB = b.split(' ')[1];

        if (lastNameA < lastNameB) return -1;
        if (lastNameA > lastNameB) return 1;
        return 0;
    });
}

// Refactored with localeCompare

function sortReindeer(reindeerNames) {
    return reindeerNames.sort((a, b) => a.split(' ')[1].localeCompare(b.split(' ')[1]));
}

// Refactored again for readability

const lastName = name => name.split(' ')[1];

const sortReindeer = reindeerNames => reindeerNames.sort((nameA, nameB) => lastName(nameA).localeCompare(lastName(nameB)));
