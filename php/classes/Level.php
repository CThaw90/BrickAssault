<?php
    class Level {
        var $rawData;
        function __construct ($data) {
            $this->rawData=$data;
        }
        
        function save() {
            $result=json_decode($this->rawData, true);
            $name=NULL;
            if ($result && isset($result['name'])) {
                $name=preg_split("/[^a-zA-Z\d]/i", $result['name'])[0];
                $fh=fopen("../../json/levels/" . $name . ".json", "w");
                fwrite($fh, json_encode($result));
                fclose($fh);
            }
            return $name;
        }
    }
?>