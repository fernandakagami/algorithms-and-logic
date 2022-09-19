/* Ask for 3 integers and store them in variables. Order the values of the variables in ascending order. It is not to print ordered, but to change the values of the variables. After sorting them, print them on the screen.*/
let readline = require("readline-sync");
let a = parseInt(readline.question("Number 1 input: "));
let b = parseInt(readline.question("Number 2 input: "));
let c = parseInt(readline.question("Number 3 input: "));

if (b > a && b > c && a > c) {
    let temporaryNumber = a;
    a = b;
    b = temporaryNumber;
} else if (b > a && b > c && c > a) {
    temporaryNumber = a;
    a = b;
    b = c;
    c = temporaryNumber;
} else if (c > a && c > b && a > b) {
    temporaryNumber = a;
    a = c;
    c = b;
    b = temporaryNumber;
} else if (c > a && c > b && b > a) {
    temporaryNumber = a;
    a = c;
    c = temporaryNumber;
} else if (a > b && a > c && c > b) {
    temporaryNumber = b;
    b = c;
    c = temporaryNumber;
}

console.log(`${a} > ${b} > ${c}`);