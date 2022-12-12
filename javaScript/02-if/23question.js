/* Ask the sell value, and print commission paid to seller.*/

let readline = require("readline-sync");
let value = parseFloat(readline.question("Sell value Input: "));

if (value >= 100000) {
    commission = 700 + value*0.16;
} else if (value >= 80000) {
    commission = 650 + value*0.14;
}   else if (value >= 60000) {
    commission = 600 + value*0.14;
} else if (value >= 40000) {
    commission = 550 + value*0.14;
} else if (value >= 20000) {
    commission = 500 + value*0.14;
} else {
    commission = 400 + value*0.14;
}

console.log (`The value of commission is ${commission}`);