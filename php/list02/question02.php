<?php
/* Create the “newVector” function. It should receive 2 numbers: $size and $initialValue. The function should return an array of size equal to $size. All vector elements must have $initialValue as value. The parameter $initialValue must be optional, so if the user does not supply the value, it must be zero. Hint: use the PHP function print_r to print a vector. */

function newVector($size, $initialValue) {
    $array = [];
    $i = 0;
    if ($initialValue == null) {
        $initialValue = 0;        
    }
    for($i = 0; $i < $size; $i++) { 
        array_push($array, $initialValue);
    }
    print_r($array);
}

$size = readline("Array size: ");
$initialValue = readline("Initial value input: ");
newVector($size, $initialValue);
?>