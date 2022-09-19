/* Ask for 2 integers and store them in variables a and b. Order the values of the variables in ascending order. It is not to print ordered, but to change the values of the variables. After sorting them, print them on the screen.*/
let readline = require("readline-sync");
let a = parseInt(readline.question("Number 1 input: "));
let b = parseInt(readline.question("Number 2 input: "));

if (b < a) {
    let temporaryNumber = a;
    a = b;
    b = temporaryNumber;
}

console.log(`${a} is smaller than ${b}`);