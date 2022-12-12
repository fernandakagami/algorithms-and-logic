<?php
/* Read 2 strings. Print the biggest one. */

$word1 = readline("Word 1 input: ");
$word2 = readline("Word 2 input: ");

if (strlen($word1) > strlen($word2)) {
    echo $word1;
} else {
    echo $word2;
}

?>