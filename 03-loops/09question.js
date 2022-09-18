/* Prints the conversion of Celsius to Fahrenheit. Ask to the user the range of temperature.*/
let readline = require("readline-sync");
let lowerCelsius = parseInt(readline.question("Lower celsion temperature input: "));
let higherCelsius = parseInt(readline.question("Higher celsion temperature input: "));

for (let i = lowerCelsius; i <= higherCelsius; i++) {
    let fahrenheit = (lowerCelsius * 9) / 5 + 32;
    console.log(`${lowerCelsius}ºC = ${fahrenheit}F`);
    lowerCelsius++;
}

