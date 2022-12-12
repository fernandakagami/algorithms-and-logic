/* Ask for 2 number and print all the number between them.*/
let readline = require("readline-sync");
let number1 = parseInt(readline.question("Number 1 input: "));
let number2 = parseInt(readline.question("Number 2 input : "));

if (number1 > number2) {
    while (number2 != (number1 - 1)) {
        number2++;
        console.log(number2);        
    }
} else {
    while (number1 != (number2 - 1)) {
        number1++;
        console.log(number1);
        
    }
}
