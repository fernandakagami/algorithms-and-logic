/* Ask the sell value, and print commission paid to seller.*/

let readline = require("readline-sync");
let value = parseFloat(readline.question("Sell value Input: "));

if (value >= 100000) {
    commission = value + 700 + value*0.16;
} else if (value < 100000 && value >= 80000) {
    commission = value + 650 + value*0.14;
}   else if (value < 80000 && value >= 60000) {
    commission = value + 600 + value*0.14;
} else if (value < 60000 && value >= 40000) {
    commission = value + 550 + value*0.14;
} else if (value < 40000 && value >= 20000) {
    commission = value + 500 + value*0.14;
} else {
    commission = value + 400 + value*0.14;
}

console.log (`The value of commission is ${commission}`);