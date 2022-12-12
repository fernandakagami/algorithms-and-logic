<?php
/* Draw a secret number for the user to guess. The user must try to guess the number until he gets it right. When the user makes a mistake, let them know if the secret number is greater or less than the guessed number. When the user gets it right, terminate the program. */

$secretNumber = rand(1,10);
$number = readline("Number input(1-10): ");

while ($secretNumber != $number) {    
    if ($secretNumber > $number) {
        echo "The secret number is greater than {$number}. ";
        echo "\n";
    } else {
        echo "The secret number is less than {$number}. ";
        echo "\n";
    }
    $number = readline("Number input: ");
}

echo "Congrats. The secret number was {$secretNumber}. ";

?>