// check is a integer is greater than 10

var readline = require("readline-sync");

var integer = parseInt(readline.question("Integer input: "));

if (integer > 10) {
    console.log(`${integer} is greater than 10.`);
} else {
    console.log(`${integer} is smaller than 10.`);
}

