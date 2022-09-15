/* A company decides to give its employees a salary raise according to the current salary and the time of service. Lower paid employees will get a raise proportionately higher than employees with a higher salary, and depending on the time of service in the company, each employee will receive an additional salary bonus. Ask for: 
• the current salary;
• the time of service (number of work years).
*/

let readline = require("readline-sync");
let salary = parseFloat(readline.question("Salary input: "));
let service = parseInt(readline.question("Number of work years: "));
let raise = 0;

if (salary <= 500 && service < 1) {
    raise = salary + salary*0.25;
} else if (salary <= 500 && (service >= 1 && service <= 3)) {
    raise = salary + salary*0.25 + 100;
} else if (salary <= 500 && (service >= 4 && service <= 6)) {
    raise = salary + salary*0.25 + 200;
} else if (salary <= 500 && (service >= 7 && service <= 10)) {
    raise = salary + salary*0.25 + 300;
} else if (salary <= 500 && service >= 100) {
    raise = salary + salary*0.25 + 500;
} else if (salary <= 1000 && service < 1) {
    raise = salary + salary*0.20;
} else if (salary <= 1000 && (service >= 1 && service <= 3)) {
    raise = salary + salary*0.20 + 100;
} else if (salary <= 1000 && (service >= 4 && service <= 6)) {
    raise = salary + salary*0.20 + 200;
} else if (salary <= 1000 && (service >= 7 && service <= 10)) {
    raise = salary + salary*0.20 + 300;
} else if (salary <= 1000 && service >= 100) {
    raise = salary + salary*0.20 + 500;
} else if (salary <= 1500 && service < 1) {
    raise = salary + salary*0.15;
} else if (salary <= 1500 && (service >= 1 && service <= 3)) {
    raise = salary + salary*0.15 + 100;
} else if (salary <= 1500 && (service >= 4 && service <= 6)) {
    raise = salary + salary*0.15 + 200;
} else if (salary <= 1500 && (service >= 7 && service <= 10)) {
    raise = salary + salary*0.15 + 300;
} else if (salary <= 1500 && service >= 100) {
    raise = salary + salary*0.15 + 500;
} else if (salary <= 2000 && service < 1) {
    raise = salary + salary*0.10;
} else if (salary <= 2000 && (service >= 1 && service <= 3)) {
    raise = salary + salary*0.10 + 100;
} else if (salary <= 2000 && (service >= 4 && service <= 6)) {
    raise = salary + salary*0.10 + 200;
} else if (salary <= 2000 && (service >= 7 && service <= 10)) {
    raise = salary + salary*0.10 + 300;
} else if (salary <= 2000 && service >= 100) {
    raise = salary + salary*0.10 + 500;
} else {
    if (service < 1) {
        raise = "No salary raise.";
    }
    else if (service >= 1 && service <= 3) {
        raise = salary + 100;
    } else if (service >= 4 && service <= 6) {
        raise = salary + 200;
    } else if (service >= 7 && service <= 10) {
        raise = salary + 300;
    } else {
        raise = salary + 500;
    }
}

console.log(`${raise}`);
