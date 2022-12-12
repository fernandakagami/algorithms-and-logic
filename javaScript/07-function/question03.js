function increased(value, percentage) {
    const incresaevalue = (percentage / 100) * value;
    return value + incresaevalue;
}

console.log(increased(100, 10));