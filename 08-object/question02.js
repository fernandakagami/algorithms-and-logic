class Person {
    name;
    age;
    birthdayYear;

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.birthdayYear = 2022 - age;
    }

    describe() {
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }
}

function comparePeaple(p1, p2) {
    if (p1.age > p2.age) {
        console.log(`${p1.name} is older than ${p2.name}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.name} is older than ${p1.name}`);
    } else {
        console.log(`${p1.name} and ${p2.name} have the same age.`);
    }
}

const fernanda = new Person('Fernanda', 36);
const mila = new Person('Mila', 7);

comparePeaple(fernanda, mila);