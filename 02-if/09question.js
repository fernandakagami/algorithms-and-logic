// Check if 2 integer are equal or different

let readline = require("readline-sync");

let number1 = parseInt(readline.question("Number 1 Input: "));
let number2 = parseInt(readline.question("Number 2 Input: "));

if (number1 == number2) {
    console.log(`${number1} is equal from ${number2}.`);
} else {
    console.log(`${number1} is different from ${number2}.`);
}


