// parâmetros de função

function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(2, 2));

// ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}.`;
}

console.log(nomeIdade('Fernanda', 36));

//

function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}

console.log(multiplica(soma(4,5), soma(3,3)));
console.log(multiplica(soma(4,5)));

// undefined

function comParametro(param) {
    console.log(param)
}
comParametro()