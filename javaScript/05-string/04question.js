/* A. Ask for a string S1 (maximum length of 20 characters);
B. Print the size of string S1;
C. Print string S1 in reverse; */

let readline = require("readline-sync");
let word = readline.question("Word Input: ");
let newWord = '';
let lengthWord = word.length;

if (lengthWord > 20) {
    console.log('Invalid Input');
} else {
    console.log(word);
    console.log(`The sentence has ${lengthWord}.`);
    for (let i = lengthWord - 1; i>= 0; i--) {                
        newWord += word[i];    
    }
    console.log(newWord);
}
