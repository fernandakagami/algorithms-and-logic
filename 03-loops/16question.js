/* A survey was carried out to find out the profile of students who attend elementary school. Each student provided their grade (first – 1, second – 2, third – 3 or fourth – 4), how many books they read per month and whether they liked writing (yes – 1 or no – 2).
Make a program that reads the data, calculates and prints:
A. The number of students who are in the third grade.
B. The largest number of books read by a student in fourth grade.
ç. The percentage of students who do not like writing in third grade.
Note: The stopping condition is grade zero (0)*/
let readline = require("readline-sync");
let grade = parseInt(readline.question("Grade input: "));
let books = parseInt(readline.question("Read books input: "));
let writing = readline.question("Do you like to write (yes or no): ");
let thirdGrade = 0;
let booksFourthGrade = 0;
let writingThirdGrade = 0;

while (grade != 0) {
    if (grade == 3) {
        thirdGrade++;
        if (writing == "yes"){
            writingThirdGrade++;            
        }
        console.log(thirdGrade);
        console.log(writingThirdGrade);
    }
    if (booksFourthGrade == 0 && grade == 4) {
        booksFourthGrade = books;
    } else {
        if (booksFourthGrade < books) {
            booksFourthGrade = books;
        }
    }
    grade = parseInt(readline.question("Grade input: "));
    books = parseInt(readline.question("Read books input: "));
    writing = readline.question("Do you like to write (yes or no): ");
}

console.log(`The number of students who are in the third grade is ${thirdGrade}.`);
console.log(`The largest number of books read by a student in fourth grade is ${booksFourthGrade}.`);
console.log(`The percentage of students who do not like writing in third grade is ${writingThirdGrade*100/thirdGrade}%.`);
    