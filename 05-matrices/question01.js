/* Ask for a name, convert it to uppercase and print the first 2 letters of the name.*/
let readline = require("readline-sync");
let m = [];
let co = 0;
let ro = 0;
let number = 0;

for (let i = 0; i < 4; i++) {
    m[i] = new Array(4);
    for (let j = 0; j < 4; j++) {
        m[i][j] = parseInt(readline.question('Number input: '));
        if (number < m[i][j]) {
            number = m[i][j];
            co = i;
            ro = j;
        }
    }   
}

for (let i = 0; i < 4; i++) {        
        console.log(m[i]);    
}   

console.log(`The greater number is ${number} and it is in row ${co} and column ${ro}.`);


