/* Ask for integers and stop only when the input is negative. Print the greater and the smaller numbers.*/
let readline = require("readline-sync");
let number = parseInt(readline.question("Number input: "));
let smaller = number;
let greater = number;

while (number >= 0) {
    if (greater < number) {
        greater = number;
    }
    if (smaller > number) {
        smaller = number;
    }
    number = parseInt(readline.question("Number input: "));
}

console.log(`Smaller number is ${smaller}. Greater number is ${greater}.`);