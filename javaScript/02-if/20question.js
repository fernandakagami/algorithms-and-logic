/* ask for height and weight and rate it.*/

let readline = require("readline-sync");

let h = parseFloat(readline.question("Height input: "));
let w = parseFloat(readline.question("Weight input: "));

if (h < 1.2 && w <= 60){
    console.log("Rate A");
} else if ((h >= 1.2 && h <= 1.7) && (w <= 60)) {
    console.log("Rate B");
} else if (h >= 1.7 && w <= 60) {
    console.log("Rate C");
} else if ((h < 1.2) && (w > 60 && w <= 90)) {
    console.log("Rate D");
} else if ((h >= 1.2 && h <= 1.7) && (w > 60 && w <= 90)) {
    console.log("Rate E");
} else if ((h >= 1.7) && (w > 60 && w <= 90)) {
    console.log("Rate F");
} else if (h < 1.2 && w >= 90) {
    console.log("Rate G");
} else if ((h >= 1.2 && h <= 1.7) && (w >= 90)) {
    console.log("Rate H");
} else {
    console.log("Rate I");
}

