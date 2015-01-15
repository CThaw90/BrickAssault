/**
 * Created by Chris on 1/11/2015.
 */
var up=true, right=true, left=false, down=false;
var ball=document.getElementById("ball");
var movement= 1, moving=false;
var ballBoundX, ballBoundY;


function startBallMovement(x, y) {
    var cssObject=objectifyCSS(ball.getAttribute("style"));
    cssObject.left=x+"px";
    cssObject.top=y+"px";
    ball.setAttribute("style", stringifyToCSS(cssObject));
    if (!moving) {
        moving=true;
        return window.setInterval(function() {
            ballMovement();
        }, 10);
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

/* Turns CSS String into an Object */
function objectifyCSS(cssText) {
    if (typeof cssText !== String("string")) {
        return cssText;
    }

    var rules=cssText.split(";");
    var object={};
    for (var i=0; i < rules.length; i++) {
        var keyValue=rules[i].split(":");
        if (keyValue.length===2) {
            object[keyValue[0].trim()]=keyValue[1].trim();
        }
    }

    return object;
}

/* Turn Object into a CSS String */
function stringifyToCSS(object) {
    if (typeof object !== String("object")) {
        return object;
    }
    var cssText=String("");
    for (var key in object) {
        cssText+=key+": "+object[key]+"; ";
    }

    return cssText;
}

calculateBounds();
ballBoundY=browserHeight-40;
ballBoundX=browserWidth-40;