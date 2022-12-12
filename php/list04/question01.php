<?php
/* Ask for numbers until enter the number 0. Print all numbers in ascending order. */

$numbers = [];
$number = readline("Number input: ");

while ($number != 0) {
    array_push($numbers,$number);
    $number = readline("Number input: ");
}

sort($numbers);
print_r($numbers);
?>

?>