/* Bubble Method - Ask for 4 integers and store them in variables. Order the values of the variables in ascending order. It is not to print ordered, but to change the values of the variables. After sorting them, print them on the screen.*/
let readline = require("readline-sync");
let a = parseInt(readline.question("Number 1 input: "));
let b = parseInt(readline.question("Number 2 input: "));
let c = parseInt(readline.question("Number 3 input: "));
let d = parseInt(readline.question("Number 4 input: "));
let temporaryNumber = 0;

if (a > b) {
    temporaryNumber = a;
    a = b;
    b = temporaryNumber;
}
if (b > c) {
    temporaryNumber = b;
    b = c;
    c = temporaryNumber;
}
if (c > d) {
    temporaryNumber = c;
    c = d;
    d = temporaryNumber;
}
//----
if (a > b) {
    temporaryNumber = a;
    a = b;
    b = temporaryNumber;
}
if (b > c) {
    temporaryNumber = b;
    b = c;
    c = temporaryNumber;
}
//----
if (a > b) {
    temporaryNumber = a;
    a = b;
    b = temporaryNumber;
}

console.log(`${a} < ${b} < ${c} < ${d}`);