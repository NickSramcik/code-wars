// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100


// Pass in a string of opening & closing parentheses
// Return boolean, whether they open and close correctly
// )()()() -> false

// Loop for string length iterations, add to a counter for opening, subtract for closing. 
// Return false if counter is ever negative or nonzero at the end

function validParentheses(parens) {
    let count = 0
    for (i = 0; i < parens.length; i++) {
        if (parens[i] === '(') {
            count++;
        }else if (parens[i] === ')') {
            count--;
        }if (count < 0) {
            return false;
        }
    }return count === 0;
}

// Refactored

function validParentheses(str) {
    let n = 0
    for (i = 0; i < str.length; i++) {
        if (str[i] === '(') n++;
        if (str[i] === ')') n--;
        if (n < 0) return false;
    }return n === 0;
}

// Using ternaries 

function validParentheses(str) {
    let n = 0
    for (i = 0; i < str.length; i++) {
        str[i] === '(' ? n++ : n--;
        if (n < 0) return false;
    }return n === 0;
  }

// Using a reduce, and replacing valid parentheses with emptiness, return whether final string is empty

const validParentheses = str => [...str].reduce((a, c) => (a+c).replace('()', '')) === '';

// ^This works but breaks with empty arrays, which can't be reduced



// Using a while loop, then check if length of the string is falsey (valid strings would be left empty)

function validParentheses(str) {
    while (str.indexOF('()') !== -1) {
        str = str.replace('()', '');
    }return !str.length;
  }