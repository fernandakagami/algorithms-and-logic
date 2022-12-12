/* Ask for two values X and Z. Calculate and return the result of X raised to Z.*/
let readline = require('readline-sync');
let x = parseInt(readline.question('Number 1 input: '));
let z = parseInt(readline.question('Number 2 input: '));

function raisedZ (x, z) {
    return x ** z
}

console.log(raisedZ(x, z))