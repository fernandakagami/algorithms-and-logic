/* Ask for the number of inhabitants of a certain city, and for each inhabitant enter with the following data: monthly consumption and consumer code (1 – Residential, 2 – Commercial, 3 – Industrial). Print the highest, lowest and consumption average of inhabitants; and finally the total consumption of each category. */
let readline = require("readline-sync");
let population = parseInt(readline.question("Population input: "));
let consumption = 0;
let consumer = 0;
let sumResidencial = 0;
let sumCommercial = 0;
let sumIndustrial = 0;
let residencialIndex = 0;
let commercialIndex = 0;
let industrialIndex = 0;
let error = 0;
let maxConsumption = 0;
let minConsumption = 0;
let average = 0;
let index = 0;

while (population != 0) {
    consumption = parseFloat(readline.question("Consumption input: "));
    consumer = parseInt(readline.question("Consumer code input: "));
    average = average + consumption;
    index++;
    if (maxConsumption < consumption) {
        maxConsumption = consumption;
    }
    if (minConsumption == 0) {
        minConsumption = consumption;
    } else if (minConsumption > consumption) {
        minConsumption = consumption;
    }    
    if (consumer == 1) {
        sumResidencial = sumResidencial + consumption;
        residencialIndex++;
    } else if (consumer == 2) {
        sumCommercial = sumCommercial + consumption;
        commercialIndex++;
    } else if (consumer == 3) {
        sumIndustrial = sumIndustrial + consumption;
        industrialIndex++;
    }  
    population--;
}

console.log(`Highest consumption: ${maxConsumption}`);
console.log(`Lowest consumption: ${minConsumption}`);
console.log(`Consumption average: ${average/index}`);
console.log(`Residencial consumption: ${sumResidencial/residencialIndex}`);
console.log(`Commercial consumption: ${sumCommercial/commercialIndex}`);
console.log(`Industrial consumption: ${sumIndustrial/industrialIndex}`);