/*Notice the following characteristic of the number 3025: 30 + 25 = 55 and 55² =
3025. Ask for 4 integers, one at a time. Print if the number has the same
feature as 3025. The program ends when a value less than 1,000 or greater than 9,999 shows up.*/
let readline = require("readline-sync");
let number1 = parseInt(readline.question("Number 1 input: "));
let number2 = parseInt(readline.question("Number 2 input: "));
let number3 = parseInt(readline.question("Number 3 input: "));
let number4 = parseInt(readline.question("Number 4 input: "));
let number = parseInt(`${number1}` + `${number2}` + `${number3}` + `${number4}`);

while (number > 1000 && number < 9999) {
    let firstNumbers = parseInt(`${number1}` + `${number2}`);
    let secondNumbers = parseInt(`${number3}` + `${number4}`);
    let sum = firstNumbers + secondNumbers;        
    if (sum*sum == number) {
        console.log("Number has the same features as 3025");
    } else {
        console.log("Number has not the same features as 3025");
    }
    number1 = parseInt(readline.question("Number 1 input: "));
    number2 = parseInt(readline.question("Number 2 input: "));
    number3 = parseInt(readline.question("Number 3 input: "));
    number4 = parseInt(readline.question("Number 4 input: "));
}