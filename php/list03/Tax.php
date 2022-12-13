<?php
namespace Application\Model;

require_once 'Tribute.php';

abstract class Tax implements Tribute 
{
    public $percentage;
    public $value;

    public function __construct($percentage, $value)
    {
        $this->percentage = $percentage;
        $this->value = $value;
    }

    public function getPercentage()
    {
        return $this->percentage;
    }

    public function getValue()
    {
        return $this->value;
    }

    public function setPercentage()
    {
        $this->percentage = $percentage;
    }

    public function setValue()
    {
        $this->value = $value;
    }

    abstract public function calculate($percentage, $value);
}
?>