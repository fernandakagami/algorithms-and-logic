/* Asks for two numbers, base and exponent, calculates and prints the first number raised to the second number. */
let readline = require("readline-sync");
let number1 = parseFloat(readline.question("Number 1 input: "));
let number2 = parseFloat(readline.question("Number 2 input: "));

console.log(number1**number2);

