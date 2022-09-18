/* Print the value of Sum: 
𝑆 = 1/1 + 2/4 + 3/9 + 4/16 + 5/25 + ⋯ 10/100
*/
let numerator = [];
let dividend = [];

for (let i = 0; i < 10; i++) {
    numerator[i] = i + 1;
    dividend[i] = numerator[i] * numerator[i];    
}

let sum = numerator[0]/dividend[0] + numerator[1]/dividend[1] + numerator[2]/dividend[2] + numerator[3]/dividend[3] + numerator[4]/dividend[4] + numerator[5]/dividend[5] + numerator[6]/dividend[6] + numerator[7]/dividend[7] + numerator[8]/dividend[8] + numerator[9]/dividend[9];

console.log(sum);