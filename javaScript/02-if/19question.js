/* Write a program that calculates the equation ax2 + bx + c. The program should ask for the values of a, b and c. Do the necessary validations and report to the user:
- If the user informs the value of A equal to zero, the equation is not of the second degree and the program should not ask for the other values, being closed;
- If the calculated delta is negative, the equation has no real roots. Inform the user and close the program;
- If the calculated delta is equal to zero, the equation has only one real root; inform it to the user;
- If the delta is positive, the equation has two real roots; inform the user.
* Example 1: x² – x –12 -> result: 4 and -3 
* Example 1: 5x² -> result: 0
*/

let readline = require("readline-sync");

let a = parseInt(readline.question("A input: "));

if (a == 0) {
    console.log("The equation is not of the second degree.");
} else {
    let b = parseInt(readline.question("B input: "));
    let c = parseInt(readline.question("C input: "));
    let delta = (b*b)-(4*a*c);
    let squareRoot = Math.sqrt(delta);   
    if (delta < 0) {
        console.log("The equation has no real roots.");
    } else if (delta == 0) {
        root = ((-b) - squareRoot) / (2*a);
        console.log(`The equation has 1 real roots. It is ${root}.`);
    } else {
        root1 = ((-b) + squareRoot) / (2*a);
        root2 = ((-b) - squareRoot) / (2*a);            
        console.log(`The equation has 2 real roots. They are ${root1} and ${root2}`);        
    }
}
