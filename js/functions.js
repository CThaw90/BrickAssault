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