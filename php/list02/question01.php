<?php
/*Create a function that takes 2 numbers and returns the biggest of them.*/

function compareNumber($number1, $number2) {
    if ($number1 > $number2) {
        return $number1;
    } else {
        return $number2;
    }
}

$number1 = readline("Number1 input: ");
$number2 = readline("Number2 input: ");
echo compareNumber($number1, $number2);

?>