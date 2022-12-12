/* Asks for a positive integer. This number will be the number of iterations of the algorithm. At each iteration, the algorithm must create a layer of points forming a pentagon around the existing points. The first iteration creates a single point. Print the total number of points on the screen.*/
let readline = require("readline-sync");
let value = parseInt(readline.question("Number input: "));
let pentagon = 0;
let dots = 5;

for (let i = 1; i <= value; i++) {
    if (i == 1) {
        pentagon = 1;        
    } else {
        pentagon += dots;
        dots = dots + 5;
    }
}
console.log(pentagon);

