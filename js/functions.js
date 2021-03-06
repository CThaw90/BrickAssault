/**
 * Created by Chris on 1/15/2015.
 */
/* Turns DOM CSS String into a Javascript Object */
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

/* Turns Javascript Object into a CSS String */
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

function traject(ball, detector) {
    ball.dimensions.left=parseInt(ball.dimensions.left)+(ball.left ? -1 : 1);
    ball.dimensions.top=parseInt(ball.dimensions.top)+(ball.up ? -1 : 1);
    ball.dimensions.height=parseInt(ball.dimensions.height);
    ball.dimensions.width=parseInt(ball.dimensions.width);
    ball.dimensions.id=ball.id;
    var colObj=detector.detect(ball.dimensions);
    if (colObj) {
        // console.log("Detected a collision @:");
        // console.log(colObj);
        switch (colObj.dir) {
            // Collides with the right wall
            case 20:
                ball.left=true;
                ball.right=false;
                break;
            // Collides with the top wall
            case 10:
                ball.down=true;
                ball.up=false;
                break;
            // Collides with the left wall
            case 40:
                ball.left=false;
                ball.right=true;
                break;
            // Collides with the bottom Wall
            case 30:
                ball.stop();
                ball.initPosition(platform);
                break;
            // Ball Collided with the platform
            case -1: 
                ball.down=!ball.down;
                ball.up=!ball.up;
                break;
            case 1:
                ball.down=!ball.down;
                ball.up=!ball.up;
                break;
            case 2:
                ball.right=!ball.right;
                ball.left=!ball.left;
                break;
            case 3:
                ball.down=!ball.down;
                ball.up=!ball.up;
                break;
            case 4:
                ball.right=!ball.right;
                ball.left=!ball.left;
                break;

        }
        if (colObj.object.name==="brick" && colObj.object.remove()) {
            collision.unregisterObjectById(colObj.object.id);
            delete bricks[colObj.object.id];
            // if ()
        }
    } else {
        ball.drawObject();
    }
}


/* Checks objects to determine if   *
 * all keys and values are the same */
Object.defineProperty(Object.prototype, "equals", {
    enumerable: false,
    value: function(obj) {
        if (typeof obj !== "object") return false;
        for (var key in obj) {
            if (this[key] !== obj[key]) 
                return fal
        }
        
        return true;
    }
});

/* Toggles the visibility of the initial start message */
Object.defineProperty(Object.prototype, "toogleStartMsg", {
	enumerable: false,
	value: function(toggle) {
		var msg = document.getElementById("startMessage");
		msg.style.visiblity = toggle ? "visible" : "hidden";
	}
});

/* Checks if the calling object is empty */
Object.defineProperty(Object.prototype, "isEmpty", {
    enumerable: false,
    value: function() {
        return !Object.keys(this);
    }
});