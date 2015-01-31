/**
 * Created by Chris on 1/11/2015.
 */
//var up=true, right=true, left=false, down=false;
//var ball=document.getElementById("ball");
//var movement=1, moving=false;
//var ballBoundX, ballBoundY;

function ball(dimensions) {
    this.up=true, this.right=true, this.left=false, this.down=false;
    this.object=document.getElementById("ball");
    this.movement=1, this.moving=false;
    this.handle=null;
    
    this.location=function() {
        var cssObject=this.object.getAttribute("style");
        return {object: "ball", x: parseInt(cssObject.left), y: parseInt(cssObject.top)};
    };
    
    this.start=function() {
        if (!this.moving) {
            this.moving=true;
            this.handle=window.setInterval(function() {
                this.continuousMovement();
            }, 1);
        }
    };
    
    this.stop=function() {
        if (this.moving && this.handle) {
            window.clearInterval(this.handle);
            this.moving=false;
        }
    };
    
    this.continuousMovement=function() {
        var cssObject=objectifyCSS(ball.getAttribute("style"));
        cssObject.left=parseInt(cssObject.left);
        cssObject.top=parseInt(cssObject.top);
        var moved=false;
        
        if (this.up && cssObject.top-this.movement > 0) {
            cssObject.top=String(cssObject.top-this.movement)+"px";
            moved=true;
        } else if (this.up) {
            this.down=true;
            this.up=false;
//            moved=true;
        }
        
        if (this.down && cssObject.top+this.movement < this.ybounds) {
            cssObject.top=String(cssObject.top+this.movement)+"px";
            moved=true;
        } else if (this.down) {
            this.down=false;
            this.up=true;
//            moved=true;
        }
        if (this.right && cssObject.left+this.movement < this.xbounds) {
            cssObject.left=String(cssObject.left+this.movement)+"px";
            moved=true;
        } else if (this.right) {
            this.right=false;
            this.left=true;
//            moved=true;
        }
        if (this.left && cssObject.left-this.movement > 0) {
            cssObject.left=String(cssObject.left-this.movement)+"px";
            moved=true;
        } else if (this.left) {
            this.right=true;
            this.left=false;
//            moved=true;
        }
        
        this.object.setAttribute("style", (moved) ? stringifyToCSS(cssObject) : this.object.getAttribute("style"));
    };
    
    this.moveLeft=function(x) {
        var cssObject=objectifyCSS(ball.getAttribute("style"));
        cssObject.left=String(parseInt(cssObject.left)-Math.abs(x)+"px");
        ball.setAttribute("style", stringifyToCSS(cssObject));
    };
    
    this.moveRight=function(x) {
        var cssObject=objectifyCSS(ball.getAttribute("style"));
        cssObject.left=String(parseInt(cssObject.left)+Math.abs(x))+"px";
        ball.setAttribute("style", stringifyToCSS(cssObject));
    };
}
//function moveBallLeft(x) {
//    var cssObject=objectifyCSS(ball.getAttribute("style"));
//    cssObject.left=String(parseInt(cssObject.left)-x)+"px";
//    ball.setAttribute("style", stringifyToCSS(cssObject));
//}
//
//function moveBallRight(x) {
//    var cssObject=objectifyCSS(ball.getAttribute("style"));
//    cssObject.left=String(parseInt(cssObject.left)+x)+"px";
//    ball.setAttribute("style", stringifyToCSS(cssObject))
//}
//function startBallMovement(x, y) {
//    if (!moving) {
//        moving=true;
//        return window.setInterval(function() {
//            ballMovement();
//        }, 1);
//    }
//}
//function stopBallMovement(intervalObject) {
//    if (moving) {
//        console.log("Stopping Ball Movement");
//        window.clearInterval(intervalObject);
//        moving=false;
//    }
//}
//function ballMovement() {
//    var cssObject=objectifyCSS(ball.getAttribute("style"));
//    cssObject.left=parseInt(cssObject.left);
//    cssObject.top=parseInt(cssObject.top);
//
//    if (up && cssObject.top-movement > 0) {
//        cssObject.top=String(cssObject.top-movement)+"px";
//    } else if (up) {
//        down=true;
//        up=false;
//    }
//    if (down && cssObject.top+movement < ballBoundY) {
//        cssObject.top=String(cssObject.top+movement)+"px";
//    } else if (down) {
//        down=false;
//        up=true;
//    }
//    if (right && cssObject.left+movement < ballBoundX) {
//        cssObject.left=String(cssObject.left+movement)+"px";
//    } else if (right) {
//        right=false;
//        left=true;
//    }
//    if (left && cssObject.left-movement > 0) {
//        cssObject.left=String(cssObject.left-movement)+"px";
//    } else if (left) {
//        right=true;
//        left=false;
//    }
//
//    ball.setAttribute("style", stringifyToCSS(cssObject));
//}

//calculateBounds();
//ballBoundY=browserHeight-40;
//ballBoundX=browserWidth-40;