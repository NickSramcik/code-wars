// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.


// Pass in 2 strings of lowercase letters
// Return whether they both start and end with the same letters
// 'shrek' -> 'sock' -> true

// Return whether the first letters are equal AND a slice of the last letter are equal

function feast(beast, dish) {
    return beast[0] == dish[0] && beast.slice(-1) == dish.slice(-1);
}

// Refactored into arrow function

const feast = (beast, dish) => beast[0] == dish[0] && beast.slice(-1) == dish.slice(-1);