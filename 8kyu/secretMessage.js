// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her?

//Pass in a string (name)
//Return a new string. Greeting by default, secret message if name is Johnny
//'Jonny' - 'Hello, my love!'

//Check if argument is johnny, return secret message if so. Otherwise, return default. 

function greet(name){
    return name === 'Johnny' ? 'Hello, my love!' : `Hello, ${name}!`
  }

//One line

const greet = name => name === 'Johnny' ? 'Hello, my love!' : `Hello, ${name}!`;

//Ternary inside template literal

const greet = name => `Hello, ${name == 'Johnny' ? 'my love' : name}!`;