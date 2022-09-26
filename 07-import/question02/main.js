const {gets, print} = require('./support-function');

const score = gets();

if (score < 5) {
    print("You didn't pass.");
} else if (score >= 5 && score < 7) {
    print('You need more classes.')
} else {
    print('Congratulations')
}