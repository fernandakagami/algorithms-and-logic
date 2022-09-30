/* Ask for 6 numbers of a lottery card. Then fill a vector with six numbers. Shows if the user got 4, 5 or 6 numbers right.*/
let readline = require("readline-sync");
let lotteryCard = [ ];
let numbers = [1, 50, 21, 31, 35, 47];
let luck = 0;
let number = 0

for (let i = 0; lotteryCard.length < 6; i++) {    
    number = parseInt(readline.question(`Number ${lotteryCard.length} input: `));
    if (number > 0 && number <= 60) {
        lotteryCard.push(number);    
    } else {
        console.log('Wrong number. Type new number: ');        
    }    
}

for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        if (lotteryCard[i] === numbers[j]) {
            ++luck;
        }
    }
}

if (luck === 4) {
    console.log('you correctly guessed 4 numbers. You win.');
} else if (luck === 5) {
    console.log('You correctly guessed 5 numbers. You win.');
} else if (luck === 6) {
    console.log('You correctly guessed 6 numbers. You win.');
} else {
    console.log("Sorry. You didn't win.");
}