/* Calculates the factorial of an integer. Ex.: 5!=5.4.3.2.1=120. */
let readline = require("readline-sync");
let number = parseInt(readline.question("Number input: "));
let factorial = 1;

for (let i = number; i > 0; i--) {
    factorial *= i;     
}

console.log(factorial);