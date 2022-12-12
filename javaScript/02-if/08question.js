// check is a integer is greater than 10

let readline = require("readline-sync");

let number = parseInt(readline.question("Integer input: "));

if (number > 10) {
    console.log(`${number} is greater than 10.`);
} else {
    console.log(`${number} is smaller than 10.`);
}

