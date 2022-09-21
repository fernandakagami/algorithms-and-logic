/* One of the ways to get the square root of a number is subtract consecutive odd numbers from 1, until the result of the subtraction is less than or equal to zero. */
let readline = require('readline-sync');
let number = parseInt(readline.question("Number input: "));
let subtraction = number;
let count = 0;

for (let i = 1; i <= subtraction; (i = i+2)) {
    subtraction -= i;   
    count++; 
}

if (subtraction == 0) {
    console.log(`The square root is ${count}.`);
} else {
    console.log(`The square root is between ${count} and ${count + 1}.`);
}
