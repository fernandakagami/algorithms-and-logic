function createDescont(value, descont) {
    return value - value * (descont / 100);
}

function createFees(value, fees) {
    return value + value * (fees / 100);
}

function payment(value, typeOfPayment) {
    if (typeOfPayment === 1) {
        return createDescont(value, 10);
    } else if (typeOfPayment === 2) {
        return createDescont(value, 15);
    } else if (typeOfPayment === 3) {
        return createDescont(value, 0);
    } else {
        return createFees(value, 10);
    }
}

console.log(payment(100, 4));

    

