/*Create an electronic voting machine with the following options:
1. White
2. Null
3. Kiko
4. Chaves
5. Chiquinha
The machine ends when digits 666.
Print the number of votes of each candidate.*/
let readline = require("readline-sync");
let vote = parseInt(readline.question("Vote input: "));
let white = 0;
let nullVote = 0;
let kiko = 0;
let chaves = 0;
let chiquinha = 0;

while (vote != 666) {
    if (vote == 1) {
        white++;
    } else if (vote == 2) {
        nullVote = nullVote + 1;
    } else if (vote == 3) {
        kiko = kiko + 1;
    } else if (vote == 4) {
        chaves = chaves + 1;
    } else if (vote == 5) {
        chiquinha = chiquinha + 1;
    } else {
        console.log("Error");
    }
    vote = parseInt(readline.question("Vote input: "));
}

console.log(`Number of votes:`);
console.log(`White votes: ${white}`);
console.log(`Null votes: ${nullVote}`);
console.log(`Kiko votes: ${kiko}`);
console.log(`Chaves votes: ${chaves}`);
console.log(`Chiquinha votes: ${chiquinha}`);
