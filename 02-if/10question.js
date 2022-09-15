// Check if a integer is divisible for other integer

let readline = require("readline-sync");

let number1 = parseInt(readline.question("Number 1 Input: "));
let number2 = parseInt(readline.question("Number 2 Input: "));

let remainder = number1 % number2;

if (remainder == 0) {
    console.log(`${number1} is divisible for ${number2}.`);    
} else {
    console.log(`${number1} is not divisible for ${number2}.`);    
}