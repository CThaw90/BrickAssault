function Socket() {
    this.send=function(data) {
        var req=null;
        if (window.XMLHttpRequest) {
            req=new XMLHttpRequest();
            req.open("POST", "http://localhost/BrickAssault/php/controllers/socket.php", false);
            req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            req.onreadystatechange=function() {
                if (req.readyState===4 && req.status===200) {
                    console.log(req.responseText);
                }
            };  
        }
        
        req.send("data=123&msg=456");
    };
    
}