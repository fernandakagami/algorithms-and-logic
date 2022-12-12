/* Ask for positive integers. if there is a negative number or the vector is complete, stop the programn. It is known that the vector can have a maximum of 10 elements. */
let readline = require('readline-sync');
let numbersVector = [];
let j = 0;
let temporaryNumber;

for (let i = 0; i < 10; i++) {
    let number = parseInt(readline.question("Number input: "));
    if (number < 0) {
        break;
    } else {
        numbersVector.push(number);
        j++;            
    }
}

j--;

for (let i = 0; i < j; i++) {
    temporaryNumber = numbersVector[i];
    numbersVector[i] = numbersVector[j];
    numbersVector[j] = temporaryNumber;    
    j--;
}
