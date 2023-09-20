// Who is the killer?
// Some people have been killed!
// You have managed to narrow the suspects down to just a few. Luckily, you know every person who those suspects have seen on the day of the murders.

// Task.
// Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:

// {'James': ['Jacob', 'Bill', 'Lucas'],
//  'Johnny': ['David', 'Kyle', 'Lucas'],
//  'Peter': ['Lucy', 'Kyle']}
// and also a list of the names of the dead people:

// ['Lucas', 'Bill']
// return the name of the one killer, in our case 'James' because he is the only person that saw both 'Lucas' and 'Bill'

// Pass in an object, with each property containing an array of strings; and an array of strings
// Return a string

// Loop through the properties within the input object
//   If current property contains every name of the dead array, return the name of that property

function killer(suspectInfo, dead) {
    for (suspect in suspectInfo) {
        if (dead.every(name => suspectInfo[suspect].includes(name))) {
            return suspect;
        }
    }
}
