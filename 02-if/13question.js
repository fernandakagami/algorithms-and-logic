// Check if the year is a leap year.

let readline = require("readline-sync");

let year = parseInt(readline.question("Year input: "));
let fourHundred = year % 400;
let four = year % 4;
let oneHundred = year % 100;

if (fourHundred == 0 || (four == 0 && oneHundred != 0)){
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}