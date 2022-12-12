//  number is even ou odd
let readline = require("readline-sync");
let number = 0;
let division = 0;

console.log("Check if a number is even or odd");
number = parseInt(readline.question("Number: "));

division = number%2;

if(division == 0) {
    console.log(`The number ${number} is even.`);
} else {
    console.log(`The number ${number} is odd.`);
}