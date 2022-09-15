/* Ask for height and the sex, calculate the ideal weight*/
let readline = require("readline-sync");
let height = parseFloat(readline.question("Height input: "));
let sex = readline.question("Sex input(m or f): ");
let weight = 0;

if (sex == "m") {
    weight = 72.7 * height - 58;
} else {
    weight = 62.1 * height - 44.7;
}

console.log(`Ideal weight: ${weight}`);




