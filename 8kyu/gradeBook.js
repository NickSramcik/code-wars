// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'

// Pass in 3 numbers -> scores on tests
// Return a string, the letter grade score average of those scores
// 95,90,93 -> 'A'   

// Calculate the average score, then use if statements to return the corresponding letter grade

function getGrade (s1, s2, s3) {
    let avg = (s1 + s2 + s3) / 3;
    if (avg >= 90) return 'A';
    if (avg >= 80) return 'B';
    if (avg >= 70) return 'C';
    if (avg >= 60) return 'D';
    return 'F';
}

// Refactored to handle any number of inputs

function getGrade (...scores) {
    let avg = scores.reduce((a, c) => a + c, 0) / scores.length

    if (avg >= 90) return 'A';
    if (avg >= 80) return 'B';
    if (avg >= 70) return 'C';
    if (avg >= 60) return 'D';
    return 'F';
}