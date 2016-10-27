<?php
abstract class Animal{

    public $name;
    public $color;


    public function describe(){

        return $this->name. 'is' .$this->color;

    }

    abstract public function makeSound();
}

class Duck extends Animal {
    public function describe()
    {
        return parent::describe();
    }

    public function makeSound()
    {
        return'quack quack';
    }
}

class Dog extends Animal{
    public function describe()
    {
        return parent::describe();
    }

    public function makeSound()
    {
        return 'Bark';
    }
}

class Fox extends Animal{
    public function describe()
    {
        return parent::describe();
    }

    public function makeSound()
    {
        return 'Ring ding din da ding da ding, pow pow pow pow pow pa pow pa pow';
    }
}
$animal = new Fox();
$animal->name = 'Lucas the Irish Wheaton Terrier ';
$animal->color =' brown and black'.'<br>';
echo $animal->describe();

echo $animal->makeSound();