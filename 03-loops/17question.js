/* Ask for a positive integer from the user, then print the Fibonacci sequence up to the first number higher than the number read.*/
let readline = require("readline-sync");
let number = parseInt(readline.question("Number input: "));
let fib1 = 1;
let fib2 = 1;

while (fib2 <= number) {
    newFib = fib2 + fib1;    
    fib1 = fib2;    
    fib2 = newFib;    
}

console.log(fib2);


     

