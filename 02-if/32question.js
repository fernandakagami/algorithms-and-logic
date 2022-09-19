/* Ask for 4 integers and store them in variables. Order the values of the variables in ascending order. It is not to print ordered, but to change the values of the variables. After sorting them, print them on the screen.*/
let readline = require("readline-sync");
let a = parseInt(readline.question("Number 1 input: "));
let b = parseInt(readline.question("Number 2 input: "));
let c = parseInt(readline.question("Number 3 input: "));
let d = parseInt(readline.question("Number 4 input: "));
let temporaryNumber = 0;

if (a > b && a > c && a > d) {
    if (b > c && b > d) {
        if (d > c) {
            temporaryNumber = c;
            c = d;
            d = temporaryNumber;
        } 
    } else if (c > b && c > d) {
        if (b > d) {
            temporaryNumber = b;
            b = c;
            c = temporaryNumber;
        } else {
            temporaryNumber = b;
            b = c;
            c = d;
            d = temporaryNumber;
        }
    } else if (d > b && d > c) {
        if (b > c) {
            temporaryNumber = b;
            b = d;
            d = c;
            c = temporaryNumber;
        } else {
            temporaryNumber = b;
            b = d;
            d = temporaryNumber;
        }
    }
} else if (b > a && b > c && b > d) {
    if (a > c && a > d) {
        temporaryNumber = b;
        b = a;
        a = temporaryNumber;
        if (d > c) {
            temporaryNumber = c;
            c = d;
            d = temporaryNumber;
        }
    } else if (c > a && c > d) {
        if (a > d) {
            temporaryNumber = a;
            a = b;
            b = c;
            c = temporaryNumber;
        } else {
            temporaryNumber = a;
            a = b;
            b = c;
            c = d;
            d = temporaryNumber;            
        }
    } else if (d > a && d > c) {
        if (a > c) {
            temporaryNumber = a;
            a = b;
            b = d;
            d = c;
            c = temporaryNumber;            
        } else {
            temporaryNumber = a;
            a = b;
            b = d;
            d = temporaryNumber; 
        }
    }
} else if (c > a && c > b && c > d) {
    if (a > b && a > d) {       
        if (b > d) {
            temporaryNumber = a;
            a = c;
            c = b; 
            b = temporaryNumber;                                   
        } else {
            temporaryNumber = a;
            a = c;
            c = d;
            d = b;
            b = temporaryNumber;
        }
    } else if (b > a && b > d) {
        if (a > d) {
            temporaryNumber = a;
            a = c;
            c = temporaryNumber;            
        } else {
            temporaryNumber = a;
            a = c;
            c = d;
            d = temporaryNumber;
        }
    } else if (d > a && d > b) {
        if (a > b) {
            temporaryNumber = a;
            a = c;
            c = temporaryNumber;
            temporaryNumber = b;
            b = d;            
            d = temporaryNumber;
        } else {
            temporaryNumber = a;
            a = c;
            c = b;
            b = d;            
            d = temporaryNumber;
        }
    }
} else if (d> a && d > b && d > c) {
    if (a > b && a > c) {       
        if (b > d) {
            temporaryNumber = a;
            a = d;
            d = c;
            c = b;
            b = temporaryNumber;
        } else {
            temporaryNumber = a;
            a = d;
            d = b;
            b = temporaryNumber;
        }
    } else if (b > a && b > c) {
        if (a > c) {
            temporaryNumber = a;
            a = d;
            d = c;
            c = temporaryNumber;     
        } else {
            temporaryNumber = a;
            a = d;            
            d = temporaryNumber;
        }
    } else if (c > a && c > b) {
        if (a > b) {
            temporaryNumber = a;
            a = d;
            d = b;
            b = c;
            c = temporaryNumber;            
        } else {
            temporaryNumber = a;
            a = d;
            d = temporaryNumber;
            temporaryNumber = b;
            b = c;
            c = temporaryNumber;
        }
    }
} 

console.log(`${a} > ${b} > ${c} > ${d}`);