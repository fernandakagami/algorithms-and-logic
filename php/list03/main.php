<?php
namespace Application\Model;

require_once 'Iss.php';
require_once 'Icms.php';

$iss = new Iss(0.1, 10);
$iss->calculate($iss->getPorcentage(), $iss->getValue());
echo "\n";

$icms = new Icms(0.1, 10);
$icms->calculate($icms->getPorcentage(), $icms->getValue());

?>