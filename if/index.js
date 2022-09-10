//  number is even ou odd
var readline = require("readline-sync");
var number = 0;
var division = 0;

console.log("Check if a number is even or odd");
number = parseInt(readline.question("Number: "));

division = number%2;

if(division == 0) {
    console.log(`The number ${number} is even.`);
} else {
    console.log(`The number ${number} is odd.`);
}

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

// check which number is greater
var readline = require("readline-sync");

console.log("Place 2 numbers");
var number1 = parseFloat(readline.question("Number1: "));
var number2 = parseFloat(readline.question("Number 2: "));

if (number1 > number2) {
    console.log(`${number1} is greater than ${number2}`);
} else if (number1 < number2) {
    console.log(`${number2} is greater than ${number1}`);
} else {
    console.log(`${number1} is equal to ${number2}`);
}

// Place the current year, birthday year and name, if age egual greater than 16, print person can vote.
var readline = require("readline-sync");

var currentYear = parseInt(readline.question("Place the current year: "));
var birthdayYear = parseInt(readline.question("Place birthday year: "));
var myName = readline.question("Place your name: ");

var age = currentYear - birthdayYear;

if (age >= 16) {
    console.log(`${myName} is ${age} year old and can vote.`) 
} else {
    console.log(`${myName} is ${age} year old and cannot vote.`)
}

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

// Place a passaword and confirmation, and check if both are egual.

var readline = require("readline-sync");

var password = readline.question('Input New Password: ', {hideEchoBack: true});
var confirmation= readline.question('Input Confirmation: ', {hideEchoBack: true});

if (password == confirmation) {
    console.log("Confirmed access");
} else {
    console.log("Denied access");
}

