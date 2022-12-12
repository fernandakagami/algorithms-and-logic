/* Ask for three numbers. For each number print double. Use a function that takes an integer as a parameter and returns its double. The calculated value must be printed in the main function. */
let readline = require('readline-sync')
let num1 = parseInt(readline.question('Number 1 input: '));
let num2 = parseInt(readline.question('Number 2 input: '));
let num3 = parseInt(readline.question('Number 3 input: '));

function double (num) {
    console.log(num * 2);
}

double(num1)
double(num2)
double(num3)

