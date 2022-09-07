const apresentar = nome => `meu nome é ${nome}`;

const soma = (num1, num2) => num1 + num2;

// Arrow funtion com + 1 linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "somente número de 1 a 9"
    } else {
        return num1 + num2;
    }
}

// Hoisting: arrow function se comparta como expressão