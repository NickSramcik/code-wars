// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

// Pass in 2 arrays of single letter strings (answer key and exam answers)
// Return a number, score of 2nd input (correct = 4, wrong = -1, blank = 0)
// Loop through the exam and check add to count according to the answer, return count when finished
// If score < 0, return 0

function checkExam(key, exam) {
    let score = 0;
    for (i = 0; i < exam.length; i++) {
        switch (exam[i]) {
            case '': 
                score = score;
                break;
            case key[i]: 
                score += 4;
                break; 
            default: 
                score -= 1;
                break;
        };
    }return score < 0 ? 0 : score;
}

// Using reduce

function checkExam(key, exam) {
    let score = exam.reduce((score, answer, i) => {
        const keyAnswer = key[i];
        if (answer == keyAnswer) return score += 4;
        if (answer == '') return score;
        return score -= 1;
    }, 0);
    if (score < 0) return 0;
    return score;
}

// Refactored into arrow function

const checkExam = (k, e) => (k = e.reduce((a, c, i) => c == '' ? a : c == k[i] ? a += 4 : a -= 1, 0)) < 0 ? 0 : k;