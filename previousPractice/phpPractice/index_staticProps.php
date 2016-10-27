<?php
class User{

        public $username;
        public static $minPassLength = 5;



    public static function validatePassword(){

        if(strlen($password) >= self::$minPassLength){

            return true;

        }

        else{
            return false;
        }



    }

}

//$password ='password';
//
//if(User::validatePassword($password)){
//
//    echo 'password is valid';
//}

echo User::$minPassLength;
