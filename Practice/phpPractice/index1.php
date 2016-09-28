<?php
//$myVar1 = 'Hello';
//
//$myVar2 = ' Arizona';
//
//echo $myVar1. $myVar2;

#$num = array(12,45,22,34,65);

//print_r($num); prints whole array

//echo $num [1]; prints 45

/*$ages = array(
    "Cook"=>35,
    "Clawson" => 33,
    "Eric"=> 4,
    "Gavin" => 18
);*/

//echo $ages ['Clawson']; echos clawsons age

//echo count($ages); counts the values in the array

//array_pop($ages); gets rid of the last value

//array_shift($ages); gets rid of the first value

#print_r($ages);

//for($i = 0; $i <= 5; $i++){
//    echo $i;
//}

//$i = 0;
//
//while($i <= 10){
//    echo 'Number '. $i . '<br>';
//    $i++;
//}

//$ages = array(
//    "Cook"=>35,
//    "Clawson" => 33,
//    "Eric"=> 4,
//    "Gavin" => 18
//);
//
//foreach($ages as $name => $age){
//    echo $name.' is ' . $age . ' years old'. '<br>';
//}

//function greet(){
//    echo 'Hello world';
//
//}
//
//greet();

//function greet($name){
//    echo 'Hello '. $name;
//}
//
//greet('Mollee');
//
//function greet($greeting,$name){
//    echo $greeting.' '. $name;
//}
//
//greet('What\'s up','Mollee');

//$num = 10;
//
//if($num==10){
//    echo 'correct';
//}
//
//class Hello{
//    function greet($name){
//        echo 'Hello there, I am '. $name;
//    }
//}
//
//$hello = new Hello;
//$hello->greet('Mollee');
//
//
class greet{

    public function welcome($name){
        return "Welcome, " . $name. '.';
    }
}
class hello extends greet{
    public function welcome($name)
    {
        return parent::welcome($name);
    }

}

class salutation extends greet{
    public function welcome($name)
    {
        return parent::welcome($name);
    }
}


$greeting = new greet();
echo $greeting->welcome('Ariel').'<br>';
$hello = new hello();
echo $hello->welcome('Mollee') . '<br>';
$salutation = new salutation();
echo $salutation->welcome('Derek');
?>