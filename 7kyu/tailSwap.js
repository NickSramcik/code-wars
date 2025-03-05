// You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.

// Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.

// Examples
// ["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
// ["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]

// Pass in an array of strings, length 2
// Return an array of strings, length 2

// Let head1 be the first string before the colon
// Let head2 be the second string before the colon
// Let tail1 be the second string after the colon
// Let tail2 be the second string after the colon
// Return [head1:tail2, head2:tail1]

function tailSwap(arr) {
    const head1 = arr[0].split(':')[0];
    const head2 = arr[1].split(':')[0];
    const tail1 = arr[0].split(':')[1];
    const tail2 = arr[1].split(':')[1];

    return [head1 + ':' + tail2, head2 + ':' + tail1];
}
