/* Ask for a product code and quantity. Print the price of product. Each execution, only one order will be calculated. 
*/
let readline = require("readline-sync");
let order = "y";
let product = parseInt(readline.question("Product code input: "));
let quantity = parseInt(readline.question("Quantity input: "));

while (order == "y") {
    if (product == 100) {
        console.log(`Value order: ${1.2 * quantity}`);
    } else if (product == 101) {
        console.log(`Value order: ${1.3 * quantity}`);
    } else if (product == 102) {
        console.log(`Value order: ${1.5 * quantity}`);
    } else if (product == 103) {
            console.log(`Value order: ${1.2 * quantity}`);
    } else if (product == 104) {
        console.log(`Value order: ${1.7 * quantity}`);
    } else if (product == 105) {
        console.log(`Value order: ${2.2 * quantity}`);
    } else if (product == 106) {
        console.log(`Value order: ${1.0 * quantity}`);
    } else {
        console.log(`Error`);
    }
    order = readline.question("Other order?(y or n) ");
}
