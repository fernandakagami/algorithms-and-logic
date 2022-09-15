/* Ask for one value between zero and five. Ask the user if they want the value in English or Portuguese. Print the number according to the user's choice.*/
let readline = require("readline-sync");
let value = parseInt(readline.question("Number input: "));
let language = readline.question("Language input(p or e): ");

if (language == "p") {
    if (value == 1) {
        write = "um";
    } else if  (value == 2) {
        write = "dois";
    } else if  (value == 3) {
        write = "três";
    } else if  (value == 4) {
        write = "quatro";
    } else if  (value == 5) {
        write = "cinco";
    } else {
        write = "Error";
    }
} else if (language == "e") {
    if (value == 1) {
        write = "one";
    } else if  (value == 2) {
        write = "two";
    } else if  (value == 3) {
        write = "three";
    } else if  (value == 4) {
        write = "four";
    } else if  (value == 5) {
        write = "five";
    } else {
        write = "Error";
    }
} else {
    write = "Error";
}

console.log(write);


