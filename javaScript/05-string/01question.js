/* Ask for a name, convert it to uppercase and print the first 2 letters of the name.*/
let readline = require("readline-sync");
let name = readline.question("Name input: ");

name = name.toUpperCase();

for (let i = 0; i < 2; i++) {
    console.log(name[i]);    
}
