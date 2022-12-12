/* Ask for two positive integers per parameter and return the sum of the N integers between them. */
let readline = require('readline-sync');
let number1 = parseInt(readline.question('Number 1 input: '));
let number2 = parseInt(readline.question('Number 2 input: '));

function sumNumbers(num1, num2) {
    let sum = 0;
    if (num1 > num2) {
        let i = num2 + 1;
       for (i; i < num1; i++) {
            sum += i;            
        }
        return sum
    } else if (num1 < num2) {
        let i = num1 + 1;
        for (i; i < num2; i++) {
            sum += i;             
        }
        return sum
    } else {
        return 'error'
    }
}

console.log(sumNumbers(number1, number2))