<?php
namespace Application\Model;

require_once 'Tax.php';

class Iss extends Tax
{
    public function __construct($porcentage, $value)
    {
        parent::__construct($porcentage, $value);
    }

    public function calculate($porcentage, $value)
    {
        echo $value - ($value*$porcentage);
    }
}
?>