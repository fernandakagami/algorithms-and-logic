const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubleNumbers = numbers.map(function (num) {
    return num * 2;
}) 

console.log(doubleNumbers);

const numbersFilter = numbers.filter(n => {
    return n < 5
})

console.log(numbersFilter);