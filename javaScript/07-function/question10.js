const numbers = [3, 5, 7, 9, 11];

const total = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})

console.log(total);