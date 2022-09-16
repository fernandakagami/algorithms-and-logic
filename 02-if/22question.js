/* Ask for distance and fuel amount consumed for a car, calculate the consumption in Km/l and print a mesage */

let readline = require("readline-sync");
let distance = parseFloat(readline.question("Distance input: "));
let fuel = parseFloat(readline.question("Fuel amount input: "));

if (fuel == 0) {
    console.log("Invalid fuel value.");
} else {
    let consumption = distance / fuel;
    if (consumption <= 8) {
        console.log("Sell the car!!!");
    } else if (consumption < 12) {
        console.log("Economic!");
    } else {
        console.log("Super economic!");
    }
}


