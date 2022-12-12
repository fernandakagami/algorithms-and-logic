<?php
/* Read a phrase. Remove the first and last word. Print the new sentence. */

$phrase = readline("Phrase input: ");

$words = explode(" ", $phrase);
array_pop($words);
array_shift($words);

$newPhrase = implode(" ", $words);
echo $newPhrase;
?>