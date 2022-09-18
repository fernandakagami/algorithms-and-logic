/* In a soccer league there are 5 teams and each team has 11 players. Make a program that receives the age, weight and height of each of the players, calculates and displays:
A. The number of players under 18 years;
B. The average age of the players of each team;
C. The average height of all players in the league;
D. The percentage of players weighing more than 80 kilos among all players in the league.
*/
let readline = require("readline-sync");
let age = 0;
let weight = 0;
let height = 0;
let underAge = 0;
let averageAgeTeam = 0;
let averageHeight = 0;
let weighingpercentage = 0;
let i = 1

for (i; i <= 5; i++) {
    for (let u = 1; u <= 11; u++) {
        age = parseInt(readline.question(`Age input ${u}: `));
        weight = parseFloat(readline.question(`Weight Input ${u}: `));
        height = parseFloat(readline.question(`Height Input ${u}: `));

        if (age < 18) {
            underAge++;            
        }

        averageAgeTeam += age;

        averageHeight += height;
        
        if (weight > 80) {
            weighingpercentage++;             
        }
    }
    console.log(`The average age of the players of team ${i} is ${averageAgeTeam/11}.`);
}

console.log(`The number of players under 18 year is ${underAge}`);

console.log(`The average height of all players in the league is ${averageHeight/55}`);

console.log(`The percentage of players weighing more than 80 kilos in the league is ${weighingpercentage*0.55}`)
