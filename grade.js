// Array of scores
const scores = [97, 83, 21, 52, 70, 49];

// Function to determine the grade based on the score
function getGrade(score) {
    switch (true) {
        case (score >= 80 && score <= 100):
            return 'A';
        case (score >= 50 && score < 80):
            return 'B';
        case (score >= 30 && score < 50):
            return 'C';
        case (score >= 10 && score < 30):
            return 'D';
        case (score >= 0 && score < 10):
            return 'F';
        default:
            return 'Invalid score'; // In case the score does not fall into a valid range
    }
}

// Iterate over the array of scores using a for loop
for (let i = 0; i < scores.length; i++) {
    let score = scores[i];
    
    // Use if statement to ensure the score is valid (between 0 and 100)
    if (score >= 0 && score <= 100) {
        // Get the grade using the switch statement inside the getGrade function
        let grade = getGrade(score);
        // Print the score and its corresponding grade
        console.log(`Score: ${score}, Grade: ${grade}`);
    } else {
        console.log(`Score: ${score} is an invalid score.`);
    }
}
