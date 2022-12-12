/* Ask for a integer between 1 and 12. Print the month. If the integer doesn't exist, print a mesage. */
let readline = require("readline-sync");
let number = parseInt(readline.question("Number input: "));

if (number > 12 || number < 1) {
    console.log("Invalid number.");
} else if (number == 1) {
    console.log("January");
} else if (number == 2) {
    console.log("February");
} else if (number == 3) {
    console.log("March");
} else if (number == 4) {
    console.log("April");
} else if (number == 5) {
    console.log("May");
} else if (number == 6) {
    console.log("June");
} else if (number == 7) {
    console.log("July");
} else if (number == 8) {
    console.log("August");
} else if (number == 9) {
    console.log("September");
} else if (number == 10) {
    console.log("October");
} else if (number == 11) {
    console.log("November");
} else {
    console.log("December");
}
