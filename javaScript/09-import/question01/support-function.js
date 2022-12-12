const inputs = [10, 5, 50, 10, 98, 23, 45, 1, 70, 8, 100];

let i = 0;

function gets() {
    const value = inputs[i];
    i++;
    return value;
}

function print(text) {
    console.log(text);
}

module.exports = {gets, print};