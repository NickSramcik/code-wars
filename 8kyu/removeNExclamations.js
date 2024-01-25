// Remove n exclamation marks in the sentence from left to right. n is positive integer.

// Examples
// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi",1) === "Hi"
// remove("!Hi!",1) === "Hi!"
// remove("!Hi!",100) === "Hi"
// remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

// Pass in a string and a number
// Return a string

// Loop through the string
// If n > 0 and current char is '!', replace it with '' and decrement n
// return string

function remove(str, n) {
    const arr = [...str];

    for (i = 0; i < str.length; i++) {
        if (n > 0 && arr[i] == '!') {
            arr[i] = '';
            n--;
        }
    }

    return arr.join('');
}
