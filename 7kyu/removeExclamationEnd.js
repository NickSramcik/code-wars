// Description:
// Remove all exclamation marks from the end of sentence.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

// Pass in a string
// Return a string

// Convert input to array
// While last element of array is '!', pop the array
// Convert to string and return

function remove(string) {
    const arr = [...string];
    
    while (arr[arr.length - 1] == '!') {
        arr.pop();
    }

    return arr.join('');
}
