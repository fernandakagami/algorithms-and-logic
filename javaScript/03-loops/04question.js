// check a number if it is equal a 0, it leave while.

let readline = require("readline-sync");

let number = parseFloat(readline.question("Number input: "));

while (number != 0) {
    console.log(`Wrong number ${number}`);
    number = parseFloat(readline.question("Number input: "));    
}

console.log(`Correct number ${number}`);