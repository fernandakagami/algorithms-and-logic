// Check if a date is valid. 

let readline = require("readline-sync");

let year = parseInt(readline.question("Year input: "));
let month = parseInt(readline.question("Month input: "));
let day = parseInt(readline.question("Day input: "));
let fourHundred = year % 400;
let four = year % 4;
let oneHundred = year % 100;

if (month < 1 || month > 12) {
    console.log(`${day}/${month}/${year} is not a valid date.`);
} else {
    console.log(month);
    if (month == 2 || month == 4 || month == 6 || month == 9 || month == 11) {
        console.log(thirtyDays);
        if (month == 2) {
            if ((fourHundred == 0) || ( four == 0 && oneHundred != 0)){
                console.log(fourHundred);
                console.log(four);
                console.log(oneHundred);
                if (day >= 1 && day <= 29) {
                    console.log(`${day}/${month}/${year} is a valid date.`);
                } else {
                    console.log(`${day}/${month}/${year} is not a valid date.`);
                }
            } else {
                console.log(fourHundred);
                console.log(four);
                console.log(oneHundred);
                if (day >= 1 && day <= 28) {
                    console.log(`${day}/${month}/${year} is a valid date.`);
                } else {
                    console.log(`${day}/${month}/${year} is not a valid date.`);
                }
            }
        } else {
            if (day >= 1 && day <= 30) {
                console.log(`${day}/${month}/${year} is a valid date.`);
            } else {
                console.log(`${day}/${month}/${year} is not a valid date.`);
            }
        }
    } else {
        console.log(thirtyDays);
        if (day >= 1 && day <= 31) {
            console.log(`${day}/${month}/${year} is a valid date.`);
        } else {
            console.log(`${day}/${month}/${year} is not a valid date.`);
        }
    }
}