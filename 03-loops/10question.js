/* A person have 1.50m of height and grows 2cm per year, while other person have
1.10m and grows 3cm per year. Build an algorithm that prints the height of both each year, until person two surpasses person one. At the end, print how many years it took. */
let personOne = 1.5;
let personTwo = 1.1;
let age = 0

while (personOne >= personTwo) {
    console.log(`Person 1 height: ${personOne} Person 2 height: ${personTwo}`);
    personOne = personOne + 0.02;    
    personTwo = personTwo + 0.03;
    age++;
}

console.log(age);