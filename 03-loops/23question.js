/* Ask the age and the weight of 10 people. Calculate and print the weights average of people in the same age group. The age groups are: from 1 to 10 years old, from 11 to 20 years old, from 21 to 30 years old and over 30 years old. */
let readline = require("readline-sync");
let groupone = 0;
let grouptwo = 0;
let groupthree = 0;
let groupfour = 0;
let countone = 0;
let counttwo = 0;
let countthree = 0;
let countfour = 0;

for (let i = 1; i <= 10; i++) {
    let age = parseInt(readline.question(`Age input ${i}: `));
    let weight = parseFloat(readline.question(`Weight input ${i}: `));
    if (age >= 1 && age <= 10) {
        groupone += weight;
        countone ++;
    } else if (age >= 11 && age <= 20) {
        grouptwo += weight;
        counttwo++;
    } else if (age >=21 && age <= 30) {
        groupthree += weight;
        countthree++;
    } else if (age >= 31) {
        groupfour += weight;
        countfour++;
    }
}

console.log(`Age group of 1 to 10: ${groupone/countone}`);
console.log(`Age group of 11 to 20: ${grouptwo/counttwo}`);
console.log(`Age group of 21 to 30: ${groupthree/countthree}`);
console.log(`Age group up to 31 : ${groupfour/countfour}`);

