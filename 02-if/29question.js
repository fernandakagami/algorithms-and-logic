/* Ask the math operation (+, -, * e /), ask two numbers, print the result.*/
let readline = require("readline-sync");
let operation = readline.question("Math operation input(+, -, * e /): ");
let number1 = parseFloat(readline.question("Number 1 input: "));
let number2 = parseFloat(readline.question("Number 2 input: "));
let calc = 0;

if (operation == "+") {
    calc = number1 + number2;
} else if (operation == "-") {
    calc = number1 - number2;
} else if (operation == "*") {
    calc = number1 * number2;
} else if (operation == "/" && number2 != 0) {
    calc = number1 / number2;
} else {
    calc = "Error";
}

console.log(`${calc}`);
