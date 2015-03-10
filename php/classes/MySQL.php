<?php 

    class MySQL {
        var $host, $user, $password, $dbname;
        function __construct() {
            if ($_SERVER['SERVER_NAME'] == "localhost") {
                $this->password="musicismylife90";
                $this->dbname="brickassault";
                $this->host="localhost";
                $this->user="root";
            }
        }
    }
?>