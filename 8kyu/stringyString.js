// write a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

function stringy(size) {
    let string = ''
    for (let i = 0; i < size; i++) {
        string = string + (i % 2 === 0 ? '1' : '0')
    }return string
  }

// No need to check what the modulus is, you can just use it
// i must start with 1 using this method so that the string begins with 1 instead of 0

const stringy = size => {
    let str = ''
    for (let i = 1; i <= size; i++) {
        str += i % 2
    } return str
}

// Using padStart method
// PadStart repeats a string (second arg) as many times as you pass into the first arg

const stringy = size => ''.padStart(size, '10')