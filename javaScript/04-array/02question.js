/* Ask for 10 integers and save in vector A. Print vector B. The vector B is B= 2A.*/ 
let readline = require("readline-sync");
let vectorA = [];
let vectorB = [];

for (let index = 0; index < 10; index++) {
    vectorA.push(parseInt(readline.question(`Number ${index} input: `)));
    vectorB[index] = vectorA[index] * 2;
}

console.log(vectorB);

