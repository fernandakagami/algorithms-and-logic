/* Ask for a integer. Save all the odd number. The cody ends with 0.*/
let readline = require("readline-sync");
let number = parseInt(readline.question("Number input: "));
let numberArray = [];
let index = 0;

while ( number != 0) {
    if (number % 2 != 0) {
        console.log(number);
        console.log(index);
        numberArray.push(number);    
        number = parseInt(readline.question("Number input: "));
    } else if (number % 2 == 0) {
        number = parseInt(readline.question("Number input: "));    
    }
}

console.log(numberArray);




