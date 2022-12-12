/* Ask for two numbers and check if the number entered is positive or negative. The return value will be 1 if positive, 0 if negative or -1 if equal to 0.*/

let readline = require('readline-sync');
let number1 = parseInt(readline.question('Number 1 input: '));
let number2 = parseInt(readline.question('Number 2 input: '));

function checkPositive(num) {
    if (num > 0) {
        return 1
    } else if (num < 0) {
        return 0
    } else {
        return -1
    }
}

console.log(checkPositive(number1))
console.log(checkPositive(number2))

