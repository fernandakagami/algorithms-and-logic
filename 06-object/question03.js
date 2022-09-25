class Cars {
    brand;
    color;
    fuelConsumption;

    constructor(brand, color, fuelConsumption) {
        this.brand = brand;
        this.color = color;
        this.fuelConsumption = fuelConsumption;
    }    

    spent(distanceKm, fuelPrice) {
        return distanceKm * this.fuelConsumption * fuelPrice;
    }
}

const opala = new Cars('chevrolet', 'red', 1/5);
console.log(opala.spent(70, 5));

const uno = new Cars('Fiat', 'black', 1/12);
console.log(uno.spent(70, 5));