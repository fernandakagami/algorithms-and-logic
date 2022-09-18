/* Print the first five multiples of 3, considering numbers greater than 0.*/
let readline = require("readline-sync");
let quantity = 0;
let number = 1;

while (quantity <= 4) {    
    if (number%3 == 0) {
        console.log(number);
        quantity++;
    }
    number++;    
}