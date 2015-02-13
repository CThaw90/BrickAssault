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
    var moved=detector.detect(ball.dimensions);
    if (moved) {
        console.log("Detected collision @:");
        console.log(moved);
        switch (moved.object) {
            case "RWall":
                ball.left=true;
                ball.right=false;
                break;
            case "TWall":
                ball.down=true;
                ball.up=false;
                break;
            case "LWall":
                ball.left=false;
                ball.right=true;
                break;
            case "BWall":
                ball.stop();
                ball.initPosition(platform);
                break;
            case "Platform":
                ball.down=!ball.down;
                ball.up=!ball.up;
                break;
            default:
                ball.stop();

                break;
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