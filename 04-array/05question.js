/* Read a vector with 10 elements. Change the first element with the last, the second with the penultimate, etc. up to the 5th with the 6th. Print the modified vector.*/
let vectorU = ['apple', 'orange', 'blueberry', 'berry', 'banana', 'coconut', 'pineapple', 'strawberry', 'guava', 'avocado'];
let i = 0;
let u = 9;

for (i; i < 5; i++) {    
    let temporaryElement = vectorU[i];
    vectorU[i] = vectorU[u];
    vectorU[u] = temporaryElement;
    u--;
    console.log(vectorU);
}