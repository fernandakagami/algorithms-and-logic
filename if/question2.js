// calculate the score average of student and check if the student is approved
var readline = require("readline-sync");
var score1 = 0;
var score2 = 0;
var score3 = 0;
var score4 = 0;

console.log("Place the score of the student");
score1 = parseFloat(readline.question("Score1: "));
score2 = parseFloat(readline.question("Score2: "));
score3 = parseFloat(readline.question("Score3: "));
score4 = parseFloat(readline.question("Score4: "));

var average = (score1 + score2 + score3+ score4) / 4;

if(average >= 60) {
    console.log(`The average score is ${average} and the student is approved.`);
} else {
    console.log(`The average score is ${average} and the student is not approved.`);
}