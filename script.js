let marks = prompt("Enter Your Marks");
let grade;  // Variable to store the grade

if (marks >= 84) {
    grade = "A";
} else if (marks >= 74 && marks < 84) {
    grade = "B";
} else if (marks >= 64 && marks < 74) {
    grade = "C";
} else if (marks >= 54 && marks < 64) {
    grade = "D";
} else {
    grade = "Fail";
}

alert ("Your Grade is :" +grade );