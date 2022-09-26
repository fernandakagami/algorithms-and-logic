class Person {
    name;
    weight;
    height;

    constructor(name, weight, height) {
        this.name = name;
        this.weight = weight;
        this.height = height;
    }

    calculateImc() {        
        return this.weight / (this.height * this.height);
    }

    rateImc () {
        const imc = this.calculateImc();
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
}

const jose = new Person('Jose', 100, 1.75);
console.log(jose.calculateImc());
console.log(jose.rateImc())
const fernanda = new Person('Fernanda', 64, 1.64);
console.log(fernanda.calculateImc());
console.log(fernanda.rateImc());