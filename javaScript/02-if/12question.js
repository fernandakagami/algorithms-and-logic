/* Calculate the income:
- Income <=50, deduction of 5%;
- Income > 50, deduction of 10 %
*/

let readline = require("readline-sync");

let income = parseInt(readline.question("Income input: "));

if (income <= 50) {
    let incomeWithDedution = income*0.95;
    console.log(`The income is ${incomeWithDedution}`);
} else {
    let incomeWithDedution = income*0.90;
    console.log(`The income is ${incomeWithDedution}`);
}