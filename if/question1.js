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