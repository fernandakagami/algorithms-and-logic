// Check if the year is a leap year.

var readline = require("readline-sync");

var year = parseInt(readline.question("Year input: "));
var fourHundred = year % 400;
var four = year % 4;
var oneHundred = year % 100;

if ((fourHundred == 0) || ( four == 0 && oneHundred != 0)){
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}