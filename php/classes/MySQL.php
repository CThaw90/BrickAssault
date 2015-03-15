<?php 
    include_once 'Query.php';

    class MySQL extends Query {
        var $host, $user, $password, $dbname;
        var $Dbh=NULL;
        function __construct() {
            if ($_SERVER['SERVER_NAME'] == "localhost") {
                $this->password="musicismylife90";
                $this->dbname="brickassault";
                $this->host="localhost";
                $this->user="root";
            }
        }
        
        function connect() {
            try {
                $this->Dbh = new PDO("mysql:host=$host;dbname=$this->$dbname", $this->user, $this->password);
                $this->Dbh->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
            } catch (PDOException $e) {
                $e->getMessage();
            }
        }
        
        function insertRow($table, $columns, $values) {
            parent::insertQuery();
        }
    }

//            try {
//                $Dbh = new PDO("mysql:host=localhost;dbname=brickassault", "root", "musicismylife90");
//                $Dbh->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
//                
//                $Sth = $Dbh->prepare("INSERT INTO userlevels (userId, levelId) VALUES (12, 1)");
//                $Sth->execute();
//            } catch(PDOException $e) {
//                $e->getMessage();
//            }

    $sql=new MySQL();
    $sql->insertRow(NULL, NULL, NULL);
?>