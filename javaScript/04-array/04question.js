/* Ask for 2 vectors: R with 5 elements and S with 10 elements. Create a vector x with 15 elements which in a first 5 positions contain the elements of R and the last 10 positions contain the elements of S. Print the vector X */
let readline = require("readline-sync");
let vectorR = [];
let vectorS = [];
let vectorX = [];

for (let index = 0; index < 5; index++) {
    vectorR.push(readline.question(`R Element input: `));    
}

for (let index = 0; index < 10; index++) {
    vectorS.push(readline.question(`S Element input: `));
}

vectorX = vectorR.concat(vectorS);

console.log(vectorX);


