/* Place a student ID and your 3 scores.  Calculate the weighted average of student, whereas the weight for the highest score is 4 and for the remaining two, 3. Show the ID, your three scores, the weighted average and the message "Approved" if the average is >= 5 e "Not approved" if the average is < 5. */

let readline = require("readline-sync");

let id = parseInt(readline.question("ID input "));
let score1 = parseFloat(readline.question("Score1 Input: "));
let score2 = parseFloat(readline.question("Score2 Input: "));
let score3 = parseFloat(readline.question("Score3 Input: "));
let average = 0;

if (score1 >= score2 && score1 >= score3) {
    average = (score1*4 + score2*3 + score3*3)/10;
} else if (score2 >= score1 && score2 >= score3) {
    average = (score2*4 + score1*3 + score3*3)/10;
} else {
    average = (score3*4 + score2*3 + score1*3)/10;
}

console.log(`ID: ${id}`);
console.log(`Score1: ${score1}`);
console.log(`Score2: ${score2}`);
console.log(`Score3: ${score3}`);
console.log(`Average: ${average}`);

if (average >= 5) {
    console.log(`Approved`);
} else {   
    console.log(`Not Approved`);
}
