// Check if a number is smaller than 5 and if it is 2 or 4, show "ok" if not "not ok".

var readline = require("readline-sync");

var number = parseInt(readline.question("Number Input: "));

if ((number < 5) && (number == 2 || number == 4)) {
    console.log("ok");
} else {
    console.log("not ok");
}