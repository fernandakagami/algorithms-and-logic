// Multiplication with constants

console.log("Multiplication with 2")
console.log("2 x 0 = " + (2*0));
console.log("2 x 1 = " + (2*1));
console.log("2 x 2 = " + (2*2));
console.log("2 x 3 = " + (2*3));
console.log("2 x 4 = " + (2*4));
console.log("2 x 5 = " + (2*5));
console.log("2 x 6 = " + (2*6));
console.log("2 x 7 = " + (2*7));
console.log("2 x 8 = " + (2*8));
console.log("2 x 9 = " + (2*9));
console.log("2 x 10 = " + (2*10));

// Multiplication with variables

var n = 5;
console.log("Multiplication with " +n)
console.log(n + " x 0 = " + (n*0));
console.log(n + " x 1 = " + (n*1));
console.log(n + " x 2 = " + (n*2));
console.log(n + " x 3 = " + (n*3));
console.log(n + " x 4 = " + (n*4));
console.log(n + " x 5 = " + (n*5));
console.log(n + " x 6 = " + (n*6));
console.log(n + " x 7 = " + (n*7));
console.log(n + " x 8 = " + (n*8));
console.log(n + " x 9 = " + (n*9));
console.log(n + " x 10 = " + (n*10));

// Sum of 2 numbers
var value1 = 30;
var value2 = 20;
var total = 0;

total = value1 + value2;
console.log('Sum of 2 numbers:')
console.log(value1 + " + " + value2 + " = " + total);

// Average of 5 numbers
var num1 = 2;
var num2 = 1;
var num3 = 5;
var num4 = 9;
var num5 = 3;

console.log(`The average of ${num1} + ${num2} + ${num3} + ${num4} + ${num5} is ` + ((num1+num2+num3+num4+num5)/5));

/*create a variable with your age e concatenate with your name.*/
var age = 36;
var myName = "Fernanda";

console.log(`My name is ${myName} and I have ${age} years old.`);

/*create a variable with your age, other with current year, concatenate with your name.*/
var currentYear = 2022;
var birthdayYear = currentYear - age;

console.log(`${myName} born in ${birthdayYear}.`);

/*create 3 variables of grades, find the final average.*/

var grade1 = 100;
var grade2 = 65;
var grade3 = 85;
averageGrades = (grade1 + grade2 + grade3) / 3;

console.log(`The average of grades é ${averageGrades}.`);

/*Create 2 variables of grades, their respective weights are : n1 = 3, n2 = 7, find the weighted average and concatenate with your name.*/

var weightgrade1= 3;
var weightgrade2 = 7;
var grade1 = 100;
var grade2 = 80;
var myName = "Fernanda"
weightedaverage = ((100 * 3) + (80 * 7)) / (3 + 7);

console.log(`The weighted average of ` + myName + ` was ${weightedaverage}.`);

/* "create a variable with your age, other with the current year, concatenate with your name*/

var currentDate = new Date();
var currentYear= currentDate.getFullYear();
var birthdayYear = currentYear - 36;
var myName = "Fernanda";

console.log(`The birthday year of ` + myName + ` is ${birthdayYear}.`)