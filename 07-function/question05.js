function writeMyName (name) {
    return name;
}

function iAmOfLegalAge (age) {
    if (age >= 18) {
        return writeMyName('Fernanda') + ' is of legal age.';
    } else {
        return writeMyName('Fernanda') + ' is not of legal age.';
    }    
}

console.log(iAmOfLegalAge(36));
console.log(iAmOfLegalAge(17));
console.log(iAmOfLegalAge(18));