// Check if a number is smaller than 5 and if it is 2 or 4, show "ok" if not "not ok".

let readline = require("readline-sync");

let number = parseInt(readline.question("Number Input: "));

if ((number < 5) && (number == 2 || number == 4)) {
    console.log("ok");
} else {
    console.log("not ok");
}