<?php
class People
{
    public $person1 = 'John';
    public $person2 = 'Anthony';
    public $person3 = 'Alvin';
    public $person4 = 'Glenn';
    public $person5 = 'Ben';


//    function iterateObject()
//    {
//
//        foreach ($this as $key => $value) {
//            print "$key => $value\n";
//        }
//    }

}
$people = new People;

foreach($people as $key => $value){
    print "$key => $value\n";
}
//$people->iterateObject();

