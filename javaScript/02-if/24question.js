/* A company decides to give its employees a salary raise according to the current salary and the time of service. Lower paid employees will get a raise proportionately higher than employees with a higher salary, and depending on the time of service in the company, each employee will receive an additional salary bonus. Ask for: 
• the current salary;
• the time of service (number of work years).
*/

let readline = require("readline-sync");
let salary = parseFloat(readline.question("Salary input: "));
let yearsOfService = parseInt(readline.question("Number of work years: "));
let newSalary = salary;
let bonus = 500;

if (salary <= 500) {
    newSalary = salary*1.25;
} else if (salary <= 1000) {
    newSalary = salary*1.20;
} else if (salary <= 1500) {
    newSalary = salary*1.15;
} else if (salary <= 2000) {
    newSalary = salary*1.10;
}

if (yearsOfService < 1) {
    bonus = 0;
} else if (yearsOfService <= 3) {
    bonus = 100;
} else if (yearsOfService <= 6){
    bonus = 200;
} else if (yearsOfService <= 10 ) {
    bonus = 300;
}

if (newSalary == salary && bonus == 0) {
    console.log(`Employee doesn't have increase in the salary.`);        
} else {
    console.log(`Salary: ${bonus+salary}`);
}
