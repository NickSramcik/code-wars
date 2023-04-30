// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.

// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

// Pass in a positive integer
// Return a string, conditional to input
// 21 -> drink whisky

// Use ternary to return correct string

function peopleWithAgeDrink(age) {
    return `drink ${
        age < 14 ? 'toddy' : 
        age < 18 ? 'coke' : 
        age < 21 ? 'beer' : 'whisky'
    }`;
}
