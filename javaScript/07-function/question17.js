/* Ask for 3 scores from a student and a letter. If the letter is A, the function must calculate the arithmetic avearage of the student's grades; if it is P, it must calculate the weighted average, with weights 5, 3 and 2. The calculated average must be returned to the main program to then be printed on the screen. */
let readline = require('readline-sync');
let score1 = parseInt(readline.question("Score 1 input: "));
let score2 = parseInt(readline.question("Score 2 input: "));
let score3 = parseInt(readline.question("Score 3 input: ")); 
let letter = readline.question("Letter input: ");

function average (scr1, scr2, scr3, letter) {
    if (letter === 'A') {
        return (scr1 + scr2 + scr3) / 3
    } else if (letter === 'P') {
        return (scr1*5 + scr2*3 + scr3*2) / (5 + 3 + 2) 
    } else {
        return "Error"
    }
}

console.log(average(score1, score2, score3, letter))