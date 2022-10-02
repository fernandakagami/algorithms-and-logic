// regular fuction expression

const isEven = function (num) {
    return num % 2 === 0;
}

// arrow function with parens around param

const isEven = (num) => {
    return num % 2 === 0;
}

// no parens around param

const inEven = num => {
    return num % 2 === 0;
}

//implicit return

const isEven = num => (
    num % 2 === 0
);

//one-liner implicit return

const isEven = num => num % 2 === 0;