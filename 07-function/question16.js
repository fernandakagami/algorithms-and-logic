/* Ask for three numbers (> 0) which represents the measures of the sides of a triangle. Build functions for:
A. Determine whether they sides form a triangle, knowing that the length of each side of a triangle is less than the sum of the other two sides.
B. Determine and display the type of triangle if the measurements form a triangle:
 equilateral: triangle with three equal sides.
 isosceles: triangle with two equal sides.
 scalene: triangle with three different sides.
*/
let readline = require('readline-sync');
let number1 = parseInt(readline.question("Number 1 input: "));
let number2 = parseInt(readline.question("Number 2 input: "));
let number3 = parseInt(readline.question("Number 3 input: "));

function sidesOfTriangle (num1, num2, num3) {
    if ((num1 + num2 > num3) && (num1 + num3 > num2) && (num2 + num3 > num1)){
        return true
    } else {
        return false
    }
}

function isATriangle (value) {
    if (value === true) {
        if (number1 != number2 && number1 != number3 && number2 != number3) {
            return "This is a scalene"
        } else if (number1 === number2 && number1 === number3 && number2 === number3) {
            return "This is a equilateral"
        } else {
            return "This is a isosceles"
        }
    } else {
        return "This is not a triangle."
    }
}

let sidesTriangle = sidesOfTriangle(number1, number2, number3);
console.log(sidesTriangle);
let triangle = isATriangle(sidesTriangle);
console.log(triangle);