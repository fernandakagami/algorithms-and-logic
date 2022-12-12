<?php
namespace Application\Model;

require_once 'Tribute.php';

abstract class Tax implements Tribute 
{
    public function __construct($porcentage, $value)
    {
        $this->porcentage = $porcentage;
        $this->value = $value;
    }

    public function getPorcentage()
    {
        return $this->porcentage;
    }

    public function getValue()
    {
        return $this->value;
    }

    public function setPorcentage()
    {
        $this->porcentage = $porcentage;
    }

    public function setValue()
    {
        $this->value = $value;
    }

    abstract public function calculate($porcentage, $value);
}
?>