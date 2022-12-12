/* Create an algorithm that reads vectors A, B, and C. Then calculate and print vector D. Note that zero in the vector D also indicates possible error. */
let vectorA = [7, 4, 9, 3, 6];
let vectorB = ['+', '-', '/', '*', '/'];
let vectorC = [1, 3, 3, 2, 0];
let vectorD = [];

for (let i = 0; i < 5; i++) {
    vectorD[i] = eval(vectorA[i] + vectorB[i] + vectorC[i]);
}

console.log(vectorD);