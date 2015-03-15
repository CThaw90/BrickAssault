<?php
    class Query {

        var $str;
        function sayHi() {
            echo ("Hello World");
        }
        
        function insertQuery() {
            $array = array(
                "name" => "Chris",
                "age"  => 24,
                "email" => "chris_thaw@yahoo.com",
                "username" => "YeahISaidItUMad"
            );
            
            foreach ($array as $key => $value) {
                print (" " . $key . ": " . $value . "<br>");
            }
        }
    }
?>