/* Ask for 6 integers and store them in a vectorA. The program must perform the following steps:
 Assign the following values to this vector: 1, 0, 5, -2, -5, 7.
 Store in an integer variable the sum between the values of positions A[0], A[1] and A[5] of the vector and print this sum on the screen.
 Modify the vector at position 4, assigning this position the value 100.
 Display each value of vector A on the screen, one in each row */
let readline = require("readline-sync");
let vectorA = [1, 0, 5, -2, -5, 7];
let numbersSum = vectorA[0] + vectorA[1] + vectorA[5];
console.log(`The sum of position 0, 1 and 5 of vectorA is ${numbersSum}`);
vectorA[4] = 100;
console.log(vectorA);
