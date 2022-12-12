/* Ask for 5 numbers and an integer. If the integer is zero, stop the program; if it is 1, show the vector; if it is 2, show the vector in reverse order. If the code is different from 1 and 2, show a message. */
let readline = require('readline-sync');
let numbersVector = [];
let temporaryNumber = 0;
let temporaryNumber2 = 0;

for (let i = 0; i < 5; i++) {
    temporaryNumber = parseFloat(readline.question("Number input: "));
    numbersVector.push(temporaryNumber);
}

number = parseInt(readline.question("Code input: "));

if (number === 0) {     
} else if (number === 1) {
    console.log(numbersVector);
} else if (number === 2) {
    let j = 4;
    for (let i = 0; i < j; i++) {
        temporaryNumber2 = numbersVector[i];
        numbersVector[i] = numbersVector[j];
        numbersVector[j] = temporaryNumber2;    
        j--;
    }
    console.log(numbersVector);   
} else {
    console.log('Error');
}
