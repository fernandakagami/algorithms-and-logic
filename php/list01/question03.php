<?php
/* Read numbers. Only stop when types zero. Print the numbers in reverse order. */

$numbers = [];
$number = readline("Number input: ");

while ($number != 0) {
    array_push($numbers,$number);
    $number = readline("Number input: ");
}

print_r(array_reverse($numbers));
?>