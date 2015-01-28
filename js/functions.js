/**
 * Created by Chris on 1/15/2015.
 */
 
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
++