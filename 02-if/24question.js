/* A company decides to give its employees a salary raise according to the current salary and the time of service. Lower paid employees will get a raise proportionately higher than employees with a higher salary, and depending on the time of service in the company, each employee will receive an additional salary bonus. Ask for: 
• the current salary;
• the time of service (number of work years).
*/

let readline = require("readline-sync");
let salary = parseFloat(readline.question("Salary input: "));
let service = parseInt(readline.question("Number of work years: "));
let raise = 0;
let bonus = 0;

if (salary <= 500) {
    raise = salary + salary*0.25;
} else if (salary <= 1000) {
    raise = salary + salary*0.20;
} else if (salary <= 1500) {
    raise = salary + salary*0.15;
} else if (salary <= 2000) {
    raise = salary + salary*0.10;
} else {
    raise = "No raise";
}

if (service < 1) {
    bonus = " No bonus";
} else if (service <= 3) {
    bonus = 100;
} else if (service <= 6){
    bonus = 200;
} else if (service <= 10 ) {
    bonus = 300;
} else {
    bonus = 500;
}

console.log(`Salary: ${raise+bonus}`);

