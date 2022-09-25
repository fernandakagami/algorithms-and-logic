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

const fernanda = new Person('Fernanda', 36);

console.log(fernanda);