// calculate the score average of student and check the absences and print if the student is approved
var readline = require("readline-sync");

console.log("Place the score of the student");
var score1 = parseFloat(readline.question("Score1: "));
var score2 = parseFloat(readline.question("Score2: "));
var score3 = parseFloat(readline.question("Score3: "));
var score4 = parseFloat(readline.question("Score4: "));
var classes = parseInt(readline.question("Total of Classes: "));
var absences = parseInt(readline.question("Total of Absences: "));

var average = (score1 + score2 + score3+ score4) / 4;
var absencepercentage = (absences * 100) / classes

if(average >= 60 && absencepercentage <= 25) {
    console.log(`The average score is ${average}, the absence is ${absences}% and the student is approved.`);
} else if (average >= 60 && absencepercentage > 25) {
    console.log(`The average score is ${average}, the absence is ${absences}% and the student is not approved.`);
} else if (average < 60 && absencepercentage <= 25) {
    console.log(`The average score is ${average}, the absence is ${absences}% and the student is not approved.`);
} else if (average < 60 && absencepercentage > 25) {
    console.log(`The average score is ${average}, the absence is ${absences}% and the student is not approved.`);
}