// Check if a date is valid. 

var readline = require("readline-sync");

var year = parseInt(readline.question("Year input: "));
var month = parseInt(readline.question("Month input: "));
var day = parseInt(readline.question("Day input: "));
var fourHundred = year % 400;
var four = year % 4;
var oneHundred = year % 100; 
var thirtyDays = month % 2;

if (month >= 1 && month <= 12) {
    console.log(month);
    if (thirtyDays == 0) {
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
            if (day >= 1 && day <= 31) {
                console.log(`${day}/${month}/${year} is a valid date.`);
            } else {
                console.log(`${day}/${month}/${year} is not a valid date.`);
            }
        }
    } else {
        console.log(thirtyDays);
        if (day >= 1 && day <= 30) {
            console.log(`${day}/${month}/${year} is a valid date.`);
        } else {
            console.log(`${day}/${month}/${year} is not a valid date.`);
        }
    } 
} else {
    console.log(`${day}/${month}/${year} is not a valid date.`);
}