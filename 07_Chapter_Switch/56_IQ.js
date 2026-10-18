let testScore = 10;
switch (true) {
    case (testScore >= 95):
        console.log("Top Performance-Excellent Score");
        break;
    case (testScore >= 85):
        console.log("Excellent - above expectation");
        break;
    case (testScore >= 75):
        console.log("Good- Meet expectations");
        break;
    case (testScore >= 60):
        console.log("Need Improvement");
        break;
    case (testScore >= 50):
        console.log("More improvement should be taken");
        break;
    default:
        console.log("Unsatisfactory-Require Training");
}
