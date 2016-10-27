<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>

    <?php include("class_lib.php");?>
</head>
<body>

<?php

    $clawson = new person("Patrick Clawson");
    echo "Clawson's full name is " . $clawson->get_name();

    $carol = new employee("Carol the Queen");
    echo "-->"

//    //$melanie = new person();
//
//    $clawson->set_name("Patrick Clawson");
//    $melanie->set_name("Melanie Thul");
//
//    echo "Clawson's full name: " . $clawson->get_name() . '<br>';
//    echo "Melanie's full name: " . $melanie->get_name();

?>

</body>
</html>