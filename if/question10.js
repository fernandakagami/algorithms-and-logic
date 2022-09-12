// Check if a integer is divisible for other integer

var readline = require("readline-sync");

var number1 = parseInt(readline.question("Number 1 Input: "));
var number2 = parseInt(readline.question("Number 2 Input: "));

division = number1 % number2;

if (division == 0) {
    console.log(`${number1} is divisible for ${number2}.`);    
} else {
    console.log(`${number1} is not divisible for ${number2}.`);    
}