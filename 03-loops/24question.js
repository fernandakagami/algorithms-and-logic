/* Asks for a positive integer and then prints N lines of the so-called Floyd's Triangle.*/
let readline = require("readline-sync");
let number = parseInt(readline.question("Number input: "));
let floyd = 1;

for (let i = 0; i < number; i++) {
    for (let u = 1; u <= floyd; u++) {
            console.log(u)
        }            
}
