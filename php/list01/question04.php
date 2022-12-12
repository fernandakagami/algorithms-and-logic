<?php
/* Read the following information from the user: name, age and telephone number. Store the information in a hash. Print user information. */

$user = [];

array_push($user,readline("Name input: "));
array_push($user,readline("Age input: "));
array_push($user,readline("Telephone number input: "));

print_r($user);
?>