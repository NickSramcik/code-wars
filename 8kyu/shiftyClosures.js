// Functional closures can get overly attached. Set them straight!

// Why doesn't greetAbe() actually greet Abe?

// let name = 'Abe'

// const greetAbe = () => 'Hello, ' + name + '!'

// name = 'Ben'

// const greetBen = () => 'Hello, ' + name + '!'

const greet = name => `Hello, ${name}!`;

const greetAbe = () => greet('Abe');

const greetBen = () => greet('Ben');
