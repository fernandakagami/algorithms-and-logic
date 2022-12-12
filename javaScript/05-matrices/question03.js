/* Ask for a matrix of 3x3 integers. Then generate a one-dimensional array by sum the numbers in each column of the matrix and print this vector. */
let readline = require("readline-sync");
let m = [];
let sumNumber = [0, 0, 0];

for (let i = 0; i < 3; i++) {
    m[i] = [0];    
    for (let j = 0; j < 3; j++) {
        m[i][j] = parseInt(readline.question('Number input: '));        
        sumNumber[j] += m[i][j];
    }   
}

for (let i = 0; i < 3; i++) {        
    console.log(m[i]);    
}   

console.log(sumNumber);