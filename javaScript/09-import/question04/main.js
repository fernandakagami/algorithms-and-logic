const {gets, print} = require('./support-function');

const salary = gets();
const extra = gets();

function calculatePercentage(value, percentage) {
    return value * (percentage / 100);
}

function percentageWithBaseInSalary(salary) {
    if (salary >= 0 && salary <= 1100) {
        return 5;
    } else if (salary >= 1100.01 && salary <= 2500) {
        return 10;
    } else {
        return 15;
    }
}

const transfer = salary - (calculatePercentage(salary, percentageWithBaseInSalary(salary))) + extra;

print (transfer)