/* Asks for a score, between zero and ten. show a message if the value is invalid and keep asking until the user enters a valid value. */
let readline = require("readline-sync");
let score;

do {
    score = parseFloat(readline.question("Score input: "));    
} while (score < 0 || score > 10);

console.log(`Valid score.`)
