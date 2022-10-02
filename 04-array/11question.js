/* In a party, each person gets a glass of juice. There is
four options of flavors: 1 - Orange, 2 - Grape, 3 - Strawberry and 4 - Apple. It is necessary to store each choice in a vector. At the end of the party, the administrator will enter the value 99 and the programn stops. Print the extract of total amount of juices and the amount of each juice. */
let readline = require('readline-sync');
let code = parseInt(readline.question('Flavor input: '));
let flavors = [0, 0, 0, 0];

while (code != 99) {
    if (code === 1) {
        flavors[0]++; 
        code = parseInt(readline.question('Flavor input: '));
    } else if (code === 2) {
        flavors[1]++;
        code = parseInt(readline.question('Flavor input: '));
    } else if (code === 3) {
        flavors[2]++; 
        code = parseInt(readline.question('Flavor input: '));
    } else if (code === 4) {
        flavors[3]++;
        code = parseInt(readline.question('Flavor input: '));
    } else {
        code = parseInt(readline.question('Flavor input: '));
    }
}

console.log(flavors);