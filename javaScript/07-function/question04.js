function calculateImc(weight, height) {
    return weight / Math.pow(height, 2);
}

function rateImc(imc) {
    if (imc < 18.5) {
        return 'Low weight';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Normal weight';
    } else if (imc >= 25 && imc < 30) {
        return 'High weight';
    } else if (imc >= 30 && imc < 40) {
        return 'Obese';
    } else {
        return 'Severe obesity';
    }
}

function main() {
    const weight = 64;
    const height = 1.64;
    const imc = calculateImc(weight, height);
    console.log(rateImc(imc));
}

main();

