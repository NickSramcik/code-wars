// Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

// If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

// Examples
// "!!", "??"     -->  "Right"
// "!??", "?!!"   -->  "Left"
// "!?!!", "?!?"  -->  "Left"
// "!!???!????", "??!!?!!!!!!!"  -->  "Balance"

// Pass in 2 strings
// Return a string

// Loop through each input
//     Store a count and increment 2 for '!', 3 for '?'
// Check which is larger and return respective result

function count(str) {
    let result = 0;

    for (char of str) {
        if (char == '!') result += 2;
        if (char == '?') result += 3;
    }

    return result;
}

function balance(left, right) {
    const leftScore = count(left),
          rightScore = count(right);

    if (leftScore > rightScore) return 'Left';
    if (leftScore < rightScore) return 'Right';
    if (leftScore == rightScore) return 'Balance';
}
