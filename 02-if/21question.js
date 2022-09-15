/* ask for 3 values A, B, C, check if they can be sides of triangle. Being yes, show if it is isosceles, equilateral or scalene*/

let readline = require("readline-sync");
let a = parseFloat(readline.question("A input: "));
let b = parseFloat(readline.question("B input: "));
let c = parseFloat(readline.question("C input: "));

if ((a < b + c) && (b < a + c) && (c < a + b)) {
    if ((a == b) && (b == c)) {
        console.log("It is a equilateral triangle.");
    } else if ((a == b) || (b == c) || (c == a)) {
        console.log("It is a isosceles triangle.");    
    } else {
        console.log("It is a scalene triangle.");
    }
} else {
    console.log("It is not a triangle.");
}