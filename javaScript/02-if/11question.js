/*check if a person is :
- child: 1 between 13 year old;
- teenager: 13 > between <= 20 year old;
- adult: > 20 between <= 50  year old;
- elder: > 50 year old.
*/

let readline = require("readline-sync");

let age = parseInt(readline.question("Age input: "));

if (age <= 13) {
    console.log("This person is a child.");
} else if (age <= 20) {
    console.log("This person is a teenager.");
} else if (age <= 50) {
    console.log("This person is a adult.");
} else {
    console.log("This person is a elder.");
}