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