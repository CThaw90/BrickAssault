/**
 * Created by Chris on 1/11/2015.
 */
var up=true, right=true, left=false, down=false;
var ball=document.getElementById("ball");
var movement=1, moving=false;
var ballBoundX, ballBoundY;


function startBallMovement(x, y) {
    if (!moving) {
        moving=true;
        return window.setInterval(function() {
            ballMovement();
        }, 1);
    }
}
function stopBallMovement(intervalObject) {
    if (moving) {
        console.log("Stopping Ball Movement");
        window.clearInterval(intervalObject);
        moving=false;
    }
}
function ballMovement() {
    var cssObject=objectifyCSS(ball.getAttribute("style"));
    cssObject.left=parseInt(cssObject.left);
    cssObject.top=parseInt(cssObject.top);

    if (up && cssObject.top-movement > 0) {
        cssObject.top=String(cssObject.top-movement)+"px";
    } else if (up) {
        down=true;
        up=false;
    }
    if (down && cssObject.top+movement < ballBoundY) {
        cssObject.top=String(cssObject.top+movement)+"px";
    } else if (down) {
        down=false;
        up=true;
    }
    if (right && cssObject.left+movement < ballBoundX) {
        cssObject.left=String(cssObject.left+movement)+"px";
    } else if (right) {
        right=false;
        left=true;
    }
    if (left && cssObject.left-movement > 0) {
        cssObject.left=String(cssObject.left-movement)+"px";
    } else if (left) {
        right=true;
        left=false;
    }

    ball.setAttribute("style", stringifyToCSS(cssObject));
}

function moveBallLeft(x) {
    var cssObject=objectifyCSS(ball.getAttribute("style"));
    cssObject.left=String(parseInt(cssObject.left)-x)+"px";
    ball.setAttribute("style", stringifyToCSS(cssObject));
}

function moveBallRight(x) {
    var cssObject=objectifyCSS(ball.getAttribute("style"));
    cssObject.left=String(parseInt(cssObject.left)+x)+"px";
    ball.setAttribute("style", stringifyToCSS(cssObject))
}

calculateBounds();
ballBoundY=browserHeight-40;
ballBoundX=browserWidth-40;