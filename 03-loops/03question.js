// user inform n number and the program do the average

let readline = require("readline-sync");

let sum = 0;
let i = 0;
let answer1 = "y";

while (answer1 == "y") {
    i++;
    let number = parseInt(readline.question("Number input " + (i) + ": " ));
    sum += number;
    answer1 = readline.question("Do you want to inform a number? ");
}

let average = sum / i;

console.log(`Average: ${average}`);

