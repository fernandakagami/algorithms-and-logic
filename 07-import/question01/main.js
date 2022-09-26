const {gets, print} = require('./support-function');

let numberQuantity = gets();
let greateNumber = 0;

for (let i = 0; i < numberQuantity; i++) {
    const number = gets();
    if (number > greateNumber) {
        greateNumber = number;
    }
}

print(greateNumber);