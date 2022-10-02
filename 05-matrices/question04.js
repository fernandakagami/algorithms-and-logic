/* Ask for 5-row and 4-column with the following information:
 First column: registration number (use an integer)
 Second column: exam average
 Third column: test average
 Fourth column: final score

- Calculate the final score as the sum of the exam average and test average;
- - Print the information for each student;
- Print the enrollment of the student who obtained the highest final score; (assume there is only one higher score);
- Print the average of the final scores.*/

let readline = require("readline-sync");
let m = [];
let score = 0;
let average = 0;

for (let i = 0; i < 5; i++) {       
    m[i] = [0];
    for (let j = 0; j < 3; j++) {
        m[i][j] = parseInt(readline.question('Number input: '));                
    }   
}

for (let i = 0; i < 5; i++) {           
    m[i][3] = m[i][1] + m[i][2];  
    if (score < m[i][3]){
     score = m[i][3];
    }
    average += m[i][3];
}   

for (let i = 0; i < 5; i++) {               
    console.log(m[i]);                
    }

console.log(`The highest score was ${score}`);
console.log(`The average of the final scores was ${average/5}`);


