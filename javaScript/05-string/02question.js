/* Write a program that tells you whether a string is palindrome. */
let readline = require("readline-sync");
let word = readline.question("Input: ");

let newWord = word.split(" ").join("");
let isPalindrome = true;
let j = newWord.length-1;

for (let i = 0; i < j; i++) {
    if (newWord[i] === newWord[j]) {        
        j--;
        continue;        
    } else {
        isPalindrome = false;
        break;
    }        
}

if (isPalindrome === true) {
    console.log('It is a palindrome.');    
} else {
    console.log('It is not a palindrome.');    
}

