/* Check if a worker can retire:
- >= 65 years old or
-  worked for >= 30 year or 
- >= 60 year old and worked >= 25
*/

var readline = require("readline-sync");

var age = parseInt(readline.question("Age input: "));
var work = parseFloat(readline.question("Working time: "));

if (age >= 65) {
    console.log(`You can retire.`);
} else if (work >= 30) {
    console.log(`You can retire.`);
} else if (age >= 60 && work >= 25) {
    console.log(`You can retire.`);
} else {
    console.log(`You cannot retire.`);
}