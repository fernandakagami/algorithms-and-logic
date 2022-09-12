// Place the current year, birthday year and name, if age egual greater than 16, print person can vote.
var readline = require("readline-sync");

var currentYear = parseInt(readline.question("Place the current year: "));
var birthdayYear = parseInt(readline.question("Place birthday year: "));
var myName = readline.question("Place your name: ");

var age = currentYear - birthdayYear;

if (age >= 16) {
    console.log(`${myName} is ${age} year old and can vote.`) 
} else {
    console.log(`${myName} is ${age} year old and cannot vote.`)
}
