// 1. Create a function that takes a student's score as a parameter
function evaluateGrade() {
    // 2. Declare and initialize the variable for the grade
    var score = 73;

    // 3. Use a switch statement inside the function (matching against true for ranges)
    switch (true) {
        case (score >= 85 && score <= 100):
            grade = "A";       
         console.log(" Grade: " + grade);
            break;
        case (score >= 70 && score < 85):
            grade = "B";
            console.log(" Grade: " + grade);
            break;
        case (score >= 55 && score < 70):
            grade = "C";   
            console.log(" Grade: " + grade);
            break;
        case (score >= 40 && score < 55):
            grade = "D";
            console.log(" Grade: " + grade);
            break;
        case (score >= 0 && score < 40):
            grade = "F";
            console.log(" Grade: " + grade);    
            break;
        default:
            grade = "Invalid Score"; // Handles scores outside 0-100
    }
   
}evaluateGrade();
