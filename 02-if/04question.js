// Place the current year, birthday year and name, if age egual greater than 16, print person can vote.
let readline = require("readline-sync");

let currentYear = parseInt(readline.question("Place the current year: "));
let birthdayYear = parseInt(readline.question("Place birthday year: "));
let myName = readline.question("Place your name: ");

let age = currentYear - birthdayYear;

if (age >= 16) {
    console.log(`${myName} is ${age} year old and can vote.`) 
} else {
    console.log(`${myName} is ${age} year old and cannot vote.`)
}
