/* Asks for a positive integer and then prints N lines of the so-called Floyd's Triangle.*/
let readline = require("readline-sync");
let number = parseInt(readline.question("Number input: "));
let numberLine = 0;


for (let i = 1; i <= number; i++) {
    let floyd = " ";
    for (let u = 1; u <= i; u++) {
        numberLine++;
        floyd = floyd + ` ` + numberLine;        
    }
    console.log(floyd);    
}
