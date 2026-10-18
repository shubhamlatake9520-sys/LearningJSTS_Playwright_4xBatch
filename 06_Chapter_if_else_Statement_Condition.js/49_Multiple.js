
// Example Programming Problem Statement

// • Objective: Write a program that takes a student's marks or test scores as input, calculates the total or average, and assigns a corresponding letter grade based on predefined thresholds.
// • Input Example: Marks in multiple subjects (e.g., 85, 78, 88, 90, 82) or a single aggregate score.
// • Grading Criteria Example:
// 	• A Grade: Score ≥ 90
// 	• B Grade: Score between 70 and 89
// 	• C Grade: Score between 40 and 69
// 	• F (Fail): Score < 40
// • Expected Output: The calculated average score, final assigned grade, and class summary (such as class average or pass/fail status).


let score = 70;

if (score < 0 || score > 100) {
    console.log("Invalid score");
}
else {
    if (score >= 90) {
        console.log("A-Grade");
    }
    else if (score >= 70 && score <= 89) {
        console.log("B-Grade");
    }
    else if (score >= 40 && score <= 69) {
        console.log("C-Grade");
    }
    else
    {
        console.log("F-Grade");
    }
}



