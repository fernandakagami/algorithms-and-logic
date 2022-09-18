/* Calculate and print the sum of first 10 even numbers.*/
let readline = require("readline-sync");
let number = 0;
let quantity = 0;
let sum = 0;

while (quantity < 10) {
    if (number%2 == 0) {
        sum += number;
        quantity++;        
    }
    number++;
}

console.log(sum);