// Multiplication of a number

let readline = require("readline-sync");
let factor = 0;
let number = parseInt(readline.question("Number input: "));

console.log(`Multiplication of ${number}`);

while (factor <=10 ) {
    console.log(`${number} x ${factor} = ${number * factor}`);
    factor = factor + 1;
}

