<?php
/* Read the user's height and weight. Display the Body Mass Index. */
$height = readline("Height input: ");
$weight = readline("Weight input: ");

$bmi = $weight / ($height * $height);

if ($bmi < 18.5) {
    echo "Low";
} elseif ($bmi >= 18.5 && $bmi < 25) {
    echo "Normal";
} elseif ($bmi >= 25 && $bmi < 30) {
    echo "High";
} else {
    echo "Obese";
}

?>