/* Print a 5x5 matrices. Fill the main diagonal with 1 and the other elements with 0. Write at the end the matrix obtained */
let m = [];

for (let i = 0; i < 5; i++) {
    m[i] = new Array(5);
    for (let j = 0; j < 5; j++) {
        if (i === j) {
            m[i][j] = 1;
        } else {
            m[i][j] = 0;
        }
    }   
}

for (let i = 0; i < 5; i++) {        
        console.log(m[i]);    
}   
