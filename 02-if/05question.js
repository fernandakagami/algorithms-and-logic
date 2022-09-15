// calculate the score average of student and check the absences and print if the student is approved
let readline = require("readline-sync");

console.log("Place the score of the student");
let score1 = parseFloat(readline.question("Score1: "));
let score2 = parseFloat(readline.question("Score2: "));
let score3 = parseFloat(readline.question("Score3: "));
let score4 = parseFloat(readline.question("Score4: "));
let classes = parseInt(readline.question("Total of Classes: "));
let absences = parseInt(readline.question("Total of Absences: "));

let average = (score1 + score2 + score3+ score4) / 4;
let absencepercentage = (absences * 100) / classes

if(average >= 60 && absencepercentage <= 25) {
    console.log(`The average score is ${average}, the absence is ${absences}% and the student is approved.`);
} else if (average >= 60 && absencepercentage > 25) {
    console.log(`The average score is ${average}, the absence is ${absences}% and the student is not approved.`);
} else if (average < 60 && absencepercentage <= 25) {
    console.log(`The average score is ${average}, the absence is ${absences}% and the student is not approved.`);
} else if (average < 60 && absencepercentage > 25) {
    console.log(`The average score is ${average}, the absence is ${absences}% and the student is not approved.`);
}