// Inspired by the development team at Vooza, write the function that

// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

// Note: your function should have a default parameter.

// For example(Input --> Output):

// "anyone else" --> 0
// "Zach" --> 18

// Pass in a string
// Return a number. 18 if 'Zach', 0 if anything else
// 'shrek' -> 0
// Check if string is 'Zach'. Return relevant num

function howManyLightsabersDoYouOwn(name) {
    if (name == 'Zach') return 18;
    return 0;
}

// Refatored into arrow function

const howManyLightsabersDoYouOwn = name => name == 'Zach' ? 18 : 0;