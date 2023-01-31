// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// Pass in a number, n
// Return a string depending on how large that number is 
// 26 -> 'Overweight'

// Calculate BMI & use if statements to evaluate where the number falls and return the correct string

function bmi(weight, height) {
    const bmi = weight / height ** 2;
    if (bmi <= 18.5) return 'Underweight';
    if (bmi <= 25) return 'Normal';
    if (bmi <= 30) return 'Overweight';
    return 'Obese';
}

// Using switch case

function bmi(weight, height) {
    const bmi = weight / height ** 2;
    switch (true) {
        case bmi <= 18.5:
            return 'Underweight';
            break;
        case bmi > 18.5 && bmi <= 25:
            return 'Normal';
            break;
        case bmi > 25 && bmi <= 30:
            return 'Overweight';
            break;
        case bmi > 30:
            return 'Obese';
            break;
    };
}