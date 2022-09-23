/* In a company, everyone has the same base salary of 2000 dollares and 300 dollares is increased for each year of work. Calculates the salary of each employee based on the entry of information about the years worked in the company. Salaries need to be stored in a vector as they are calculated. When all salaries have been calculated, print the salaries sorted in descending order.*/
let readline = require("readline-sync");
let salary = [];
let temporaryElement;

for (let i = 0; i < 5; i++) {
    let yearOfWork = parseFloat(readline.question("Salary Input: "));
    salary[i] = 2000 + yearOfWork * 300;
}


if (salary[0] < salary[1]) {
    temporaryElement = salary[0];
    salary[0] = salary[1];
    salary[1] = temporaryElement;
} 
if (salary[1] < salary[2]) {
    temporaryElement = salary[1];
    salary[1] = salary[2];
    salary[2] = temporaryElement;
}
if (salary[2] < salary[3]) {
    temporaryElement = salary[2];
    salary[2] = salary[3];
    salary[3] = temporaryElement;
}
if (salary[3] < salary[4]) {
    temporaryElement = salary[3];
    salary[3] = salary[4];
    salary[4] = temporaryElement;                                 
}

if (salary[0] < salary[1]) {
    temporaryElement = salary[0];
    salary[0] = salary[1];
    salary[1] = temporaryElement;
} 
if (salary[1] < salary[2]) {
    temporaryElement = salary[1];
    salary[1] = salary[2];
    salary[2] = temporaryElement;
}
if (salary[2] < salary[3]) {
    temporaryElement = salary[2];
    salary[2] = salary[3];
    salary[3] = temporaryElement;
}


if (salary[0] < salary[1]) {
    temporaryElement = salary[0];
    salary[0] = salary[1];
    salary[1] = temporaryElement;
} 
if (salary[1] < salary[2]) {
    temporaryElement = salary[1];
    salary[1] = salary[2];
    salary[2] = temporaryElement;
}

if (salary[0] < salary[1]) {
    temporaryElement = salary[0];
    salary[0] = salary[1];
    salary[1] = temporaryElement;
} 

console.log(salary);

