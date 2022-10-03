const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

const minimusPrices = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
} )

console.log(minimusPrices);