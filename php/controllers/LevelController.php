<?php 
    include_once '../classes/Level.php';
    $level=NULL;
    $data=NULL;
    if (isset($_POST["level"])) {
        $data=$_POST['level'];
        $level=new Level($data);
        echo($level->save());
    }
?>