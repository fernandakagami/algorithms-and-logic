/* The population of A is 80000 inhabitants with an annual growth rate of 3% and that the population of B is 200000 inhabitants with an annual growth rate of 1.5%. Calculates and prints the number of years required for the population of C to exceed or be equal the population of B. */
let populationA = 80000;
let populationB = 200000;
let year = 0;

while (populationA < populationB) {
    populationA = populationA*1.03;    
    populationB = populationB*1.015;     
    year++;
}

console.log(year);

