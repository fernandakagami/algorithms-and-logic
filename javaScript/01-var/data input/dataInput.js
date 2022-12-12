// sum of 2 numbers

console.log("Type 2 numbers")
var readlineSync = require('readline-sync');
var n1 = readlineSync.question('Number 1: ');
var n2 = readlineSync.question('Number 2: ');
var total = parseFloat(n1) + parseFloat(n2);

console.log(`The sum of numbers ${n1} and ${n2} is ${total}.`);

// sum and average of 5 numbers

console.log("Type 5 numbers")
var readlineSync = require('readline-sync');
var n1 = parseFloat(readlineSync.question('Number 1: '));
var n2 = parseFloat(readlineSync.question('Number 2: '));
var n3 = parseFloat(readlineSync.question('Number 3: '));
var n4 = parseFloat(readlineSync.question('Number 4: '));
var n5 = parseFloat(readlineSync.question('Number 5: '));

var total = n1 + n2 + n3 + n4 + n5;
var average = total / 5;

console.log(`The sum of numbers ${n1}, ${n2}, ${n3}, ${n4} and ${n5} is ${total} and the average is é ${average}.`);

// multiplication with data input

var readlineSync = require('readline-sync');
var n = parseInt(readlineSync.question('What multiplication do you want? '));

console.log("Multiplication of number " +n)
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

// calculate the triangle area 

var readlineSync = require('readline-sync');
var base = 0;
var height = 0;

console.log("Calculate the triangle area");
base = parseFloat(readlineSync.question(`Base: `));
height = parseFloat(readlineSync.question(`Height: `));

console.log(`The area of the triangle is: ${base*height/2}`);

// Ask the birthday year and the user name

var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var readlineSync = require('readline-sync');
var myName = readlineSync.question('What is you name? ');
var age = parseInt(readlineSync.question('What is you age? '));

console.log(`Hello ${myName}. You have borned in ${currentYear - age}.`);