const {gets, print} = require('./support-function');

let numberQuantity = gets();
let greaterNumber = 0;
let smallerNumber = 0;

for (let index = 1; index < numberQuantity; index++) {
    const number = gets()
    if ((greaterNumber < number) && (number % 2 === 0)) {
        greaterNumber = number;
    }
    if (number % 2 !== 1) {
        if ((smallerNumber === 0)) {
            smallerNumber = number;
        } else if (smallerNumber > number) {
            smallerNumber = number;
        }
    }    
}

print(greaterNumber);
print(smallerNumber);