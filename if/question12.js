/* Calculate the income:
- Income <=50, deduction of 5%;
- Income > 50, deduction of 10 %
*/

var readline = require("readline-sync");

var income = parseInt(readline.question("Income input: "));

if (income <= 50) {
    var incomeWithDedution = (income - ((income*5)/100));
    console.log(`The income is ${incomeWithDedution}`);
} else if (income > 50) {
    var incomeWithDedution = (income - ((income*10)/100));
    console.log(`The income is ${incomeWithDedution}`);
}