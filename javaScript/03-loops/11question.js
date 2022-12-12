/* Check the number between 1000 and 1999 and print those divided by 11 which remainder is equal to 5.
*/
let number = 1000;

while (number != 1999) {
    if (number%11 == 5) {
        console.log(number);
    }
    number++;
}




