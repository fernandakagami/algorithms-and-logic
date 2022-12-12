/* Translates a sentence from Portuguese into the PigLatin language. To perform the translation, simply remove the vowels from the words. For example, “Hello World” would be "Hll Wrld" in Pig Latin. */
let readline = require("readline-sync");
let word = readline.question("Input: ");

word = word.split("a").join("");
word = word.split("e").join("");
word = word.split("i").join("");
word = word.split("o").join("");
word = word.split("u").join("");

console.log(word);