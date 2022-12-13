<?php
namespace Application\Model;

require_once 'Tax.php';

class Iss extends Tax
{
    public function __construct($percentage, $value)
    {
        parent::__construct($percentage, $value);
    }

    public function calculate($percentage, $value)
    {
        echo $value - ($value*$percentage);
    }
}
?>